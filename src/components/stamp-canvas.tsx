'use client'

import { useEffect, useRef } from 'react'
import styles from './stamp-canvas.module.css'

/** 散っている「×」1 つ。位置・速度・回転・寿命だけを持つ */
type Stamp = {
  x: number
  y: number
  vx: number
  vy: number
  spin: number
  angle: number
  born: number
  life: number
  colour: string
}

/** 1 つが消えるまで（ミリ秒） */
const LIFE = 900
/** 押したときにまとめて出す数 */
const BURST = 9
/** 同時に持つ上限。増えすぎても描画が重くならないように切る */
const LIMIT = 80
/** 置く間隔（画面上の距離 px と時間 ms） */
const STEP = 26
const INTERVAL = 40

/** 描く色は riml-ds のトークンから読む。テーマが変わればこちらも変わる */
function tokenColours(host: Element): readonly string[] {
  const style = getComputedStyle(host)
  return ['--rd-color-brand-signature', '--rd-color-brand-primary', '--rd-color-accent-default']
    .map((name) => style.getPropertyValue(name).trim())
    .filter((colour) => colour.length > 0)
}

/** × を 1 つ、パスで描く。HTML-in-Canvas が無いときのかたち */
function drawCross(ctx: CanvasRenderingContext2D, size: number, colour: string) {
  const r = size / 2
  ctx.strokeStyle = colour
  ctx.lineWidth = size * 0.22
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(-r, -r)
  ctx.lineTo(r, r)
  ctx.moveTo(r, -r)
  ctx.lineTo(-r, r)
  ctx.stroke()
}

/**
 * ポインタを動かすと riml の髪どめの「×」が散る層。
 *
 * riml-ds は自動再生のモーションを置かない決まり（docs/brand.md §8）なので、
 * **操作への応答としてだけ**動かす。止まれば増えず、1 秒ほどで消える。
 * `prefers-reduced-motion` とヘッダーの「動きを止める」では何もしない。
 *
 * Chrome の HTML-in-Canvas（`drawElementImage`）が使えるときは、canvas の代替内容に
 * 置いた DOM の「はんこ」をそのまま canvas へ写す。散る × が riml-ds の面・硬い影・
 * 丸ゴシックを持つ。使えないブラウザでは同じ形をパスで描く。
 * 仕様: https://github.com/WICG/html-in-canvas
 */
export function StampCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const stampRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const stamp = stampRef.current
    const parent = canvas?.parentElement
    if (canvas === null || stamp === null || parent === null || parent === undefined) return
    if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (ctx === null) return

    // getElementTransform があれば HTML-in-Canvas が有効（Chrome のオリジントライアル）
    const drawElement =
      typeof canvas.getElementTransform === 'function' ? ctx.drawElementImage?.bind(ctx) : undefined

    let colours = tokenColours(parent)
    const stamps: Stamp[] = []
    let raf = 0
    let lastX = 0
    let lastY = 0
    let lastAt = 0

    const resize = () => {
      const dpr = Math.min(globalThis.devicePixelRatio, 2)
      const rect = parent.getBoundingClientRect()
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      colours = tokenColours(parent)
    }

    const add = (x: number, y: number, power: number) => {
      const dir = Math.random() * Math.PI * 2
      const speed = (0.04 + Math.random() * 0.09) * power
      stamps.push({
        x,
        y,
        vx: Math.cos(dir) * speed,
        vy: Math.sin(dir) * speed - 0.05,
        spin: (Math.random() - 0.5) * 0.004,
        angle: Math.random() * Math.PI,
        born: performance.now(),
        life: LIFE * (0.7 + Math.random() * 0.6),
        colour: colours[Math.floor(Math.random() * colours.length)] ?? 'currentColor',
      })
      if (stamps.length > LIMIT) stamps.splice(0, stamps.length - LIMIT)
    }

    const frame = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = stamps.length - 1; i >= 0; i--) {
        const s = stamps[i]
        if (s === undefined) continue
        const age = now - s.born
        if (age > s.life) {
          stamps.splice(i, 1)
          continue
        }
        // 飛び出して、ゆっくり落ちて、薄くなって消える
        const t = age / s.life
        s.x += s.vx * 16
        s.y += s.vy * 16 + t * 0.9
        s.angle += s.spin * 16
        const size = 26 * (1 - t * 0.35)
        ctx.save()
        ctx.globalAlpha = 1 - t * t
        ctx.translate(s.x, s.y)
        ctx.rotate(s.angle)
        if (drawElement === undefined) {
          drawCross(ctx, size, s.colour)
        } else {
          stamp.style.color = s.colour
          drawElement(stamp, -size / 2, -size / 2)
        }
        ctx.restore()
      }
      raf = stamps.length > 0 ? requestAnimationFrame(frame) : 0
    }

    const wake = () => {
      if (raf === 0) raf = requestAnimationFrame(frame)
    }

    /** ヘッダーの「動きを止める」が入っている間は反応しない */
    const stopped = () => document.documentElement.dataset['motion'] === 'off'

    const at = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect()
      return { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }

    const onMove = (event: PointerEvent) => {
      if (stopped()) return
      const { x, y } = at(event)
      const now = performance.now()
      // 一定以上動いたときだけ置く。止まれば 1 つも増えない
      if (Math.hypot(x - lastX, y - lastY) < STEP || now - lastAt < INTERVAL) return
      add(x, y, 1)
      lastX = x
      lastY = y
      lastAt = now
      wake()
    }

    const onDown = (event: PointerEvent) => {
      if (stopped()) return
      const { x, y } = at(event)
      for (let i = 0; i < BURST; i++) add(x, y, 2.2)
      wake()
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(parent)
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerdown', onDown)

    return () => {
      observer.disconnect()
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerdown', onDown)
      if (raf !== 0) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    // layoutsubtree: 代替内容をレイアウトさせる印。drawElementImage の前提
    <canvas ref={canvasRef} className={styles.layer} aria-hidden="true" layoutsubtree="">
      <span ref={stampRef} className={styles.stamp}>
        ×
      </span>
    </canvas>
  )
}
