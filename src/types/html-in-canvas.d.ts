/**
 * HTML-in-Canvas（WICG/html-in-canvas）。Chrome のオリジントライアルでのみ有効で、
 * まだどのブラウザでも既定では使えない。型だけ補い、実行時に機能検出して使う。
 * https://github.com/WICG/html-in-canvas
 */
import 'react'

declare global {
  interface CanvasRenderingContext2D {
    /** canvas の代替内容に置いた要素を、そのまま canvas に描く */
    drawElementImage?: (element: Element, x: number, y: number) => DOMMatrix
  }

  interface HTMLCanvasElement {
    /** 実装の有無を見るための入口。無ければ HTML-in-Canvas は使えない */
    getElementTransform?: (element: Element) => DOMMatrix
  }
}

declare module 'react' {
  interface CanvasHTMLAttributes<T> {
    /** 代替内容をレイアウトさせる印。drawElementImage の前提になる */
    layoutsubtree?: '' | undefined
  }
}
