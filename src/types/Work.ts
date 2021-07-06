import { WorkType } from './WorkTypes';

/**
* テストデータの型定義
* @alias image 画像のリンク 継承
* @alias appName アプリ名 継承
* @alias description アプリの詳細説明 継承
* @alias navigationLink 遷移先のリンク
*/
type WorkTypes = WorkType & {
    navigationLink: string;
};

/* TODO:以下はバックエンドで実装する */

/**
* Workのテストデータ
*/
export const WorkTestData: WorkTypes[] = [
    {
      image:
        'https://github.com/RimlTempest/dotart/blob/develop/Front/dotart/static/icon.png?raw=true',
      appName: 'DotArt',
      description:
        'かんたんにドット絵が書けるWebアプリケーションです。製作中。\n https://dotart.riml.work',
      navigationLink: 'DotArt',
    },
    {
      image:
        'https://github.com/RimlTempest/QRCC/blob/main/src/images/logo.png?raw=true',
      appName: 'QRCC',
      description:
        'QRコードを簡単に生成、読み込みができるWebアプリケーションです。\n https://qrcc.riml.work',
      navigationLink: 'QRCC',
    },
    {
      image:
        'https://github.com/RimlTempest/nextx/raw/develop/Doc/img/home.png?raw=true',
      appName: 'Nextx',
      description:
        'Nextjs + TypeScript + Tailwindなどを導入したテンプレートです。NextjsやReactに触れたことがない人でも勉強のためになるプロジェクトとなるように開発中です。',
      navigationLink: 'Nextx',
    },
    {
      image:
        'https://github.com/RimlTempest/StampApp/blob/develop/assets/images/other/logo_transparent.png?raw=true',
      appName: 'StampApp',
      description:
        'Dart/Flutterを用いたスタンプアプリのサンプルです。当アプリをテンプレートとしスタンプアプリが容易に作れるようにすることを目標に開発中です。',
      navigationLink: 'StampApp',
    },
    {
      image: '/noimage.jpg',
      appName: 'Kizuna',
      description:
        'あいことばを入力するだけで通話できる簡易ビデオ通話アプリ。現在プライベート設定中\n https://github.com/RimlTempest/d4tj',
      navigationLink: 'Kizuna',
    },
    {
      image: '/noimage.jpg',
      appName: '福島タイピング',
      description:
        '福島県を題材にしたタイピングアプリ。現在プライベート設定中\n https://github.com/RimlTempest/chiikikassei',
      navigationLink: 'F_Typing',
    },
  ];