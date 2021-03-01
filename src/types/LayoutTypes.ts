import { ReactNode } from "react";

/**
* レイアウトのPropsの型定義
* @alias height? 高さ情報
* @alias children 子要素情報
*/
export type LayoutProps = {
  height?: string;
  children?: ReactNode;
};