import React, { useState } from 'react';
import { Text, Flex, Tag, useClipboard, useToast } from '@chakra-ui/react';
import { Games, mobileGameItems } from '../../types/Game';
import { GameGroup } from '../../components/Molecules/GameGroup';

export const MobileGameCard: React.FC = () => {
  const [copyText, setCopyText] = useState('');
  const toast = useToast();
  const { onCopy } = useClipboard(copyText);

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
      title: `${mobileGameItems.find((item) => item.id === id).title}
            のフレンドコードをコピーしました。`,
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
        <Text>Mobile Game</Text>
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
