/**
* ゲームグループのPropsの型定義
* @alias gameName ゲーム名
* @alias friendCode フレンドコード
* @alias tagColor タグの色情報
* @alias copiedClicked コピーボタンの関数情報
*/
export type GameGroupProps = {
  gameName: string;
  friendCode: string;
  tagColor: string;
  copiedClicked: any;
};