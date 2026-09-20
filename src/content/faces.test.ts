import { describe, expect, test } from 'bun:test'
import { faces } from './faces'

/**
 * 表情ピッカーは JavaScript を使わず、CSS の
 * `.input[value='<id>']:checked ~ .stage [data-face='<id>']` で 1 枚だけを見せる。
 * 表情を足したときに CSS を書き足し忘れると「選んでも何も出ない」ので、
 * データと CSS の対応をテストで縛る。
 */
const css = await Bun.file(new URL('../components/face-picker.module.css', import.meta.url)).text()

describe('faces', () => {
  test('id が重複しない', () => {
    const ids = faces.map((face) => face.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('ラベルとせりふが空でない', () => {
    for (const face of faces) {
      expect(face.label.length).toBeGreaterThan(0)
      expect(face.line.length).toBeGreaterThan(0)
    }
  })

  test('画像ファイルが public/ に存在する', async () => {
    const found = await Promise.all(
      faces.map((face) => Bun.file(new URL(`../../public${face.src}`, import.meta.url)).exists()),
    )
    expect(found.every(Boolean)).toBe(true)
  })

  test('すべての id に CSS の対応する行がある', () => {
    for (const face of faces) {
      expect(css).toContain(`.input[value='${face.id}']:checked`)
      expect(css).toContain(`[data-face='${face.id}']`)
    }
  })

  test('CSS 側に余分な id が残っていない', () => {
    const inCss = [...css.matchAll(/\.input\[value='([^']+)'\]/g)].map((m) => m[1])
    const known = new Set(faces.map((face) => face.id))
    for (const id of inCss) {
      expect(known.has(id ?? '')).toBe(true)
    }
  })
})
