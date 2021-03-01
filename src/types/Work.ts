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

/**
* Workのテストデータ
*/
export const WorkTestData: WorkTypes[] = [
    {
      image:
        'https://github.com/RimlTempest/dotart/blob/develop/Front/dotart/static/icon.png?raw=true',
      appName: 'DotArt',
      description:
        'Webでかんたんにドット絵が書けるサービスです。\n https://github.com/RimlTempest/dotart',
      navigationLink: 'DotArt',
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