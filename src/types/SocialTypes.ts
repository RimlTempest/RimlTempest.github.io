/**
* SNSボタンのPropsの型定義
* @alias children アイコンや画像を入れるための子要素
* @alias label ボタンのラベル情報
* @alias href 遷移先のリンク
*/
export type SocialProps = {
  children: React.ReactNode;
  label: string;
  href: string;
};