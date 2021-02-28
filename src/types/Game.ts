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

export const Games: GameListTypes = {
  CHUNITHM: 0,
  MAIMAI: 1,
  D4DJ: 2,
  GARUPA: 3,
  PROSEKA: 4,
};

export const GameType: GameTypes = {
  AC: 0,
  MOBILE: 1,
};

export const FrindCodes: FrindCodeTypes = {
  CHUNITHM: '1007302938635',
  MAIMAI: '1002322731605',
  D4DJ: 'qsZQX3iL',
  GARUPA: '349329',
  PROSEKA: '5178262687051784',
}