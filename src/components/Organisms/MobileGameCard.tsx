import React, { useState } from 'react';
import { Text, Flex, Tag, useClipboard, useToast } from '@chakra-ui/react';
import { Games, mobileGameItems } from '../../types/Game';
import { GameGroup } from '../../components/Molecules/GameGroup';
import { useLocale } from '../../hooks/useLocale';

export const MobileGameCard: React.FC = () => {
  const [copyText, setCopyText] = useState('');
  const toast = useToast();
  const { onCopy } = useClipboard(copyText);
  const { /*locale*/ i18n } = useLocale();

  const gameCopyClicked = (id: any) => {
    switch (id) {
      case Games.D4DJ:
        setCopyText(mobileGameItems.find((item) => item.id === id).friendCode);
        break;
      case Games.GARUPA:
        setCopyText(mobileGameItems.find((item) => item.id === id).friendCode);
        break;
      case Games.PROSEKA:
        setCopyText(mobileGameItems.find((item) => item.id === id).friendCode);
        break;

      default:
        break;
    }
    toast({
      title: `${mobileGameItems.find((item) => item.id === id).title} ${
        i18n.FRIEND_CODE_COPY_MESSAGE
      }`,
      // locale === 'ja'
      //   ? `${mobileGameItems.find((item) => item.id === id).title} ${
      //       i18n.FRIEND_CODE_COPY_MESSAGE
      //     }`
      //   : `${i18n.FRIEND_CODE_COPY_MESSAGE} ${
      //       mobileGameItems.find((item) => item.id === id).title
      //     }`,
    });
    onCopy();
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
