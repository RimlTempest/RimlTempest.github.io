/**
 * riml の髪どめの ×。riml-ds の窓の「閉じる」記号と同じ、筆で書いた × の形。
 * 装飾なので aria-hidden。色は currentColor。
 */
export function XMark({ className }: { readonly className?: string | undefined }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.2}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.2 5.6 17.8 18.4" />
      <path d="M17.8 5.6 6.2 18.4" />
    </svg>
  )
}

/** 下向きの山形。スクロールの合図に使う装飾 */
export function ChevronDown({ className }: { readonly className?: string | undefined }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 9.5 12 15.5 18 9.5" />
    </svg>
  )
}
