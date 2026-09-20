export type SocialLink = {
  readonly id: string
  readonly label: string
  readonly handle: string
  readonly href: string
  /** 24×24 の viewBox に収まる塗りのパス。アイコンフォントは使わない（DESIGN.md） */
  readonly path: string
}

export const socialLinks: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'RimlTempest',
    href: 'https://github.com/RimlTempest',
    path: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3',
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    handle: '@Fande4d',
    href: 'https://twitter.com/Fande4d',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'riml',
    href: 'https://www.youtube.com/channel/UCc_EAsEp12Gwf9C3vVlj6Rg',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z',
  },
  {
    id: 'line',
    label: 'LINE',
    handle: '友だち追加',
    href: 'https://line.me/ti/p/PxIPV3pDIi',
    path: 'M24 10.3C24 5 18.6.7 12 .7S0 5 0 10.3c0 4.7 4.3 8.7 10 9.5.4.1.9.3 1.1.6.2.3.1.7.1 1l-.2 1.1c0 .3-.3 1.3 1.1.7 1.4-.6 7.3-4.3 10-7.4 1.8-2 2.7-4 2.7-6.3ZM7.7 13.4H5.3a.6.6 0 0 1-.6-.6V8a.6.6 0 0 1 1.3 0v4.1h1.7a.6.6 0 0 1 0 1.3Zm2.5-.6a.6.6 0 0 1-1.3 0V8a.6.6 0 0 1 1.3 0v4.8Zm5.8 0a.6.6 0 0 1-1.1.4l-2.5-3.3v2.9a.6.6 0 0 1-1.3 0V8a.6.6 0 0 1 1.1-.4l2.5 3.4V8a.6.6 0 0 1 1.3 0v4.8Zm3.9-3a.6.6 0 0 1 0 1.3h-1.7v1.1h1.7a.6.6 0 0 1 0 1.3h-2.4a.6.6 0 0 1-.6-.6V8a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 0 1.3h-1.7v1.1h1.7Z',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'R1mlTempest',
    href: 'https://facebook.com/R1mlTempest',
    path: 'M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z',
  },
] as const
