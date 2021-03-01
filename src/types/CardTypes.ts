/**
* カードのPropsの型定義
* @alias fallbackSrc? 読み込まれる前の画像のリンク
*/
export type CardProps = {
  fallbackSrc?: string;
}

/**
* WorkカードのPropsの型定義
* @alias fallbackSrc? 読み込まれる前の画像のリンク CardPropsを継承
* @alias image 画像のリンク
* @alias appName アプリ名
* @alias description アプリの詳細説明
* @alias navigationLink 遷移先リンク
*/
export type WorkCardProps = CardProps & {
  image: string;
  appName: string;
  description: string;
  navigationLink: string;
};

/**
* SNSカードのPropsの型定義
* @alias title SNSのタイトル
* @alias color SNSのタグカラー
*/
export type SnsCardProps = {
  title: string;
  color: string;
};