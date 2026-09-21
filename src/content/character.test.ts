import { describe, expect, test } from 'bun:test'
import { bust, bustHappy, faces, standing } from './character'
import type { Plate } from './character'

const all: readonly Plate[] = [bust, bustHappy, standing, ...faces]

/** WebP のヘッダから実寸を読む。next/image に書いた値とずれていないか確かめる */
async function sizeOf(src: string): Promise<{ width: number; height: number } | null> {
  const file = Bun.file(new URL(`../../public${src}`, import.meta.url))
  if (!(await file.exists())) return null
  const view = new DataView(await file.arrayBuffer())
  // RIFF....WEBPVP8X / VP8L / VP8␠
  const fourCC = String.fromCharCode(view.getUint8(12), view.getUint8(13), view.getUint8(14))
  if (fourCC === 'VP8') {
    const kind = view.getUint8(15)
    if (kind === 0x58) {
      // VP8X: 24bit little endian の canvas サイズ - 1
      const w = view.getUint8(24) | (view.getUint8(25) << 8) | (view.getUint8(26) << 16)
      const h = view.getUint8(27) | (view.getUint8(28) << 8) | (view.getUint8(29) << 16)
      return { width: w + 1, height: h + 1 }
    }
    if (kind === 0x4c) {
      // VP8L: ビット詰めで 14bit ずつ
      const b = [view.getUint8(21), view.getUint8(22), view.getUint8(23), view.getUint8(24)]
      const bits = (b[0] ?? 0) | ((b[1] ?? 0) << 8) | ((b[2] ?? 0) << 16) | ((b[3] ?? 0) << 24)
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
    }
    // VP8 (lossy): キーフレームヘッダの 26 バイト目から
    return { width: view.getUint16(26, true) & 0x3fff, height: view.getUint16(28, true) & 0x3fff }
  }
  return null
}

describe('設定資料の図版', () => {
  test('key が重複しない', () => {
    const keys = all.map((plate) => plate.key)
    expect(new Set(keys).size).toBe(keys.length)
  })

  test('すべて public/riml/chibi/ に存在する', async () => {
    const found = await Promise.all(
      all.map((plate) => Bun.file(new URL(`../../public${plate.src}`, import.meta.url)).exists()),
    )
    expect(found.every(Boolean)).toBe(true)
  })

  test('書いてある寸法が実ファイルと一致する（レイアウトがずれない）', async () => {
    const measured = await Promise.all(
      all.map(async (plate) => ({ key: plate.key, ...(await sizeOf(plate.src)) })),
    )
    expect(measured).toEqual(
      all.map((plate) => ({ key: plate.key, width: plate.width, height: plate.height })),
    )
  })

  test('ラベルが空でない', () => {
    for (const plate of all) {
      expect(plate.label.length).toBeGreaterThan(0)
    }
  })

  test('すべて public/riml/chibi/ を指している', () => {
    for (const plate of all) {
      expect(plate.src.startsWith('/riml/chibi/')).toBe(true)
    }
  })
})
