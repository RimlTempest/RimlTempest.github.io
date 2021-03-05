import { Games, acGameItems, mobileGameItems, GameItemType } from '../types/Game';

export const useGameItem = (id: number) => {
  let ret: GameItemType = {
    id: 0,
    title: '',
    friendCode: '',
    tagColor: ''
  };
  switch (id) {
    case Games.CHUNITHM: {
      ret = acGameItems.find((item: GameItemType) => item.id === id)!;
      break;
    }
    case Games.MAIMAI: {
      ret = acGameItems.find((item: GameItemType) => item.id === id)!;
      break;
    }
    case Games.D4DJ: {
      ret = mobileGameItems.find((item: GameItemType) => item.id === id)!;
      break;
    }
    case Games.GARUPA: {
      ret = mobileGameItems.find((item: GameItemType) => item.id === id)!;
      break;
    }
    case Games.PROSEKA: {
      ret = mobileGameItems.find((item: GameItemType) => item.id === id)!;
      break;
    }

    default: {
      break;
    }
  }
    return { ret }
}