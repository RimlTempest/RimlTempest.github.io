import React from 'react';
import { Flex, Tag, useToast } from '@chakra-ui/react';
import { mobileGameItems } from '../../types/Game';
import { GameGroup } from '../../components/Molecules/GameGroup';
import { useLocale } from '../../hooks/useLocale';
import { useGameItem } from '../../hooks/useGameItem';

export const MobileGameCard: React.FC = () => {
  const toast = useToast();
  const { /*locale*/ i18n } = useLocale();

  const gameCopyClicked = (id: number) => {
    const { ret } = useGameItem(id);
    toast({
      title: `${ret.title} ${i18n.FRIEND_CODE_COPY_MESSAGE}`,
      // locale === 'ja'
      //   ? `${mobileGameItems.find((item) => item.id === id).title} ${
      //       i18n.FRIEND_CODE_COPY_MESSAGE
      //     }`
      //   : `${i18n.FRIEND_CODE_COPY_MESSAGE} ${
      //       mobileGameItems.find((item) => item.id === id).title
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
      borderRadius="20px"
      p={5}
    >
      <Tag variant="solid" size="lg" rounded="lg" colorScheme="gray">
        {i18n.MOBILE_GAME_CARD_TITLE}
      </Tag>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        m="2vh"
        width="90%"
      >
        {mobileGameItems.map((item) => {
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
