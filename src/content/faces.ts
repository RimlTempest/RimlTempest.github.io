export type Face = {
  readonly id: string
  readonly label: string
  /** 選択中に吹き出しへ出る一言 */
  readonly line: string
  readonly src: string
}

/** キャラクターシートの下段から切り出した表情。src は public/ からの絶対パス */
export const faces: readonly Face[] = [
  { id: 'plain', label: 'ふつう', line: 'どうも、riml です。', src: '/riml/faces/plain.webp' },
  {
    id: 'smile',
    label: 'にこにこ',
    line: '作ったもの、見ていってください。',
    src: '/riml/faces/smile.webp',
  },
  {
    id: 'surprised',
    label: 'びっくり',
    line: 'えっ、もう見つかった？',
    src: '/riml/faces/surprised.webp',
  },
  { id: 'wink', label: 'すまし', line: 'コントラストは 7:1 で。', src: '/riml/faces/wink.webp' },
  { id: 'cap', label: 'ぼうし', line: '出かけるときはこれ。', src: '/riml/faces/cap.webp' },
  { id: 'ribbon', label: 'りぼん', line: 'ちょっとよそゆき。', src: '/riml/faces/ribbon.webp' },
] as const
