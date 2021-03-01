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