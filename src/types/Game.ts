type GameListTypes = {
  CHUNITHM: number;
  MAIMAI: number;
  D4DJ: number;
  GARUPA: number;
  PROSEKA: number;
};

type GameTypes = {
  AC: number;
  MOBILE: number;
};

type FrindCodeTypes = {
  CHUNITHM: string;
  MAIMAI: string;
  D4DJ: string;
  GARUPA: string;
  PROSEKA: string;
};

export type GameItemType = {
  id: number,
  title: string,
  friendCode: string,
  tagColor: string
}

/**
* 各ゲームのID
* @constant CHUNITHM 値は0
* @constant MAIMAI 値は1
* @constant D4DJ 値は2
* @constant GARUPA 値は3
* @constant PROSEKA 値は4
*/
export const Games: GameListTypes = {
  CHUNITHM: 0,
  MAIMAI: 1,
  D4DJ: 2,
  GARUPA: 3,
  PROSEKA: 4,
};

/**
* アーケード版、モバイル版の判断用定数
* @constant AC アーケード版の定数で値は0
* @constant MOBILE モバイル版の定数で値は1
*/
export const GameType: GameTypes = {
  AC: 0,
  MOBILE: 1,
};

/**
* 各ゲームのフレンドコード定数
* @constant CHUNITHM
* @constant MAIMAI
* @constant D4DJ
* @constant GARUPA
* @constant PROSEKA
*/
export const FrindCodes: FrindCodeTypes = {
  CHUNITHM: '1007302938635',
  MAIMAI: '1002322731605',
  D4DJ: 'qsZQX3iL',
  GARUPA: '349329',
  PROSEKA: '5178262687051784',
}

/**
* アーケードゲームのテストデータ
*/
export const acGameItems: GameItemType[] = [
  {
    id: 0,
    title: 'CHUNITHM',
    friendCode: FrindCodes.CHUNITHM,
    tagColor: 'yellow.400',
  },
  {
    id: 1,
    title: 'maimai',
    friendCode: FrindCodes.MAIMAI,
    tagColor: 'pink.400',
  },
];

/**
* モバイルゲームのテストデータ
*/
export const mobileGameItems: GameItemType[] = [
  {
    id: 2,
    title: 'D4DJ',
    friendCode: FrindCodes.D4DJ,
    tagColor: 'purple.500',
  },
  {
    id: 3,
    title: 'ガルパ',
    friendCode: FrindCodes.GARUPA,
    tagColor: 'red.500',
  },
  {
    id: 4,
    title: 'プロセカ',
    friendCode: FrindCodes.PROSEKA,
    tagColor: 'linkedin.500',
  },
];