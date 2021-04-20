import React from 'react';
import { Flex, Tag, useToast } from '@chakra-ui/react';
import { GameItemType } from '../../types/Game';
import { GameGroup } from '../../components/Molecules/GameGroup';
import { useLocale } from '../../hooks/useLocale';
import { useGameItem } from '../../hooks/useGameItem';
import { Locale } from '../../../locales/localeTypes';
import { useGame } from '../../hooks/useGame';

type GameItem = {
  ret: GameItemType;
};

/* TODO:StatelessなのでReact.VFCに置き換える */
export const ACGameCard: React.FC = () => {
  const toast = useToast();
  const { /*locale,*/ i18n }: Locale = useLocale();
  const { game } = useGame();

  const gameCopyClicked: (id: number) => void = (id: number) => {
    const { ret }: GameItem = useGameItem(id);
    toast({
      title: `${ret.title} ${i18n.FRIEND_CODE_COPY_MESSAGE}`,
      // locale === 'ja'
      //   ? `${acGameItems.find((item) => item.id === id).title} ${
      //       i18n.FRIEND_CODE_COPY_MESSAGE
      //     }`
      //   : `${i18n.FRIEND_CODE_COPY_MESSAGE} ${
      //       acGameItems.find((item) => item.id === id).title
      //     }`,
    });
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      backgroundColor="whiteAlpha.300"
      border="1px"
      p={5}
      borderRadius="20px"
    >
      <Tag variant="solid" size="lg" rounded="lg" colorScheme="green" mb="5px">
        {i18n.ARCADE_GAME_CARD_TITLE}
      </Tag>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        ml="2vh"
        mt="2vh"
        width="90%"
      >
        {game?.gameList.acGame_info.map((item: GameItemType) => {
          return (
            <GameGroup
              key={item.id}
              gameName={item.title}
              friendCode={item.friendCode}
              tagColor={item.tagColor}
              copiedClicked={() => gameCopyClicked(item.id)}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
