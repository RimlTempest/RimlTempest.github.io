import type { Locale } from '@/content/i18n'

/**
 * 外部リンクの読み上げ名。
 *
 * 新しいタブで開くことを名前に書く（WCAG 3.2.5）。見えている文言は名前の先頭に
 * そのまま入れる（WCAG 2.5.3 名前に含まれるラベル）。
 * 括弧と区切りは言語に合わせる — 英語の名前に全角括弧や「・」が混ざると、
 * 読み上げで意図しない間が入る。
 */
export function externalLabel(locale: Locale, label: string, where?: string): string {
  if (locale === 'ja') {
    return where === undefined ? `${label}（新しいタブ）` : `${label}（${where}・新しいタブ）`
  }
  return where === undefined ? `${label} (new tab)` : `${label} (${where}, new tab)`
}
