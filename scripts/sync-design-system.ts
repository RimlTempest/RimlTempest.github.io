/**
 * vendor/riml-ds（submodule）のデザインシステムをビルドし、
 * 生成された CSS を 1 枚にまとめて src/styles/generated/riml-ds.css に置く。
 *
 * 生成物なのでコミットしない（riml-ds と同じ規約）。`bun run dev` / `build` /
 * `storybook` の手前で必ず走る。
 *
 * 1 枚にまとめる理由: @layer の順序は最初に現れた宣言で決まる。layers.css →
 * tokens.css → index.css の順に連結すれば、読み込み順の事故が起こりえない。
 */
import { $ } from 'bun'
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const root = join(import.meta.dir, '..')
const ds = join(root, 'vendor', 'riml-ds')
const out = join(root, 'src', 'styles', 'generated', 'riml-ds.css')

const parts = [
  join(ds, 'system', 'css', 'dist', 'layers.css'),
  join(ds, 'system', 'tokens', 'dist', 'tokens.css'),
  join(ds, 'system', 'css', 'dist', 'index.css'),
]

if (!(await Bun.file(join(ds, 'package.json')).exists())) {
  console.error(
    'vendor/riml-ds が空です。`git submodule update --init --recursive` を実行してください。',
  )
  process.exit(1)
}

console.log('riml-ds: install')
await $`bun install --frozen-lockfile --ignore-scripts --filter @rimltempest/riml-ds-tokens --filter @rimltempest/riml-ds-css`
  .cwd(ds)
  .quiet()

console.log('riml-ds: build tokens + css')
await $`bun run --filter @rimltempest/riml-ds-tokens --filter @rimltempest/riml-ds-css build`
  .cwd(ds)
  .quiet()

const missing = await Promise.all(parts.map(async (p) => ((await Bun.file(p).exists()) ? null : p)))
const absent = missing.filter((p) => p !== null)
if (absent.length > 0) {
  console.error(`riml-ds のビルド結果が見つかりません:\n${absent.join('\n')}`)
  process.exit(1)
}

const banner = '/* 生成物。手で編集しない。`bun run sync:ds` で vendor/riml-ds から作り直す */\n'
const body = await Promise.all(parts.map((p) => Bun.file(p).text()))

await mkdir(dirname(out), { recursive: true })
await Bun.write(out, banner + body.join('\n'))

const bytes = (await Bun.file(out).arrayBuffer()).byteLength
console.log(`riml-ds: wrote src/styles/generated/riml-ds.css (${(bytes / 1024).toFixed(1)} KB)`)
