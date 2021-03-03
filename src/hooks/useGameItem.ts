import { Games, acGameItems, mobileGameItems, GameItemType } from '../types/Game';

export const useGameItem = (id: number) => {
    let ret: GameItemType;
    switch (id) {
      case Games.CHUNITHM:
        ret = acGameItems.find((item) => item.id === id);
        break;
      case Games.MAIMAI:
        ret = acGameItems.find((item) => item.id === id);
        break;
      case Games.D4DJ:
        ret = mobileGameItems.find((item) => item.id === id);
        break;
      case Games.GARUPA:
        ret = mobileGameItems.find((item) => item.id === id);
        break;
      case Games.PROSEKA:
        ret = mobileGameItems.find((item) => item.id === id);
        break;

      default:
        break;
    }
    return { ret }
}