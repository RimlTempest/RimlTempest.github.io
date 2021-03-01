import React, { useState } from 'react';
import { Flex, Tag, useClipboard, useToast } from '@chakra-ui/react';
import { Games, acGameItems } from '../../types/Game';
import { GameGroup } from '../../components/Molecules/GameGroup';

export const ACGameCard: React.FC = () => {
  const [copyText, setCopyText] = useState('');
  const toast = useToast();
  const { onCopy } = useClipboard(copyText);

  const gameCopyClicked: (id: number) => void = (id: number) => {
    switch (id) {
      case Games.CHUNITHM:
        setCopyText(acGameItems.find((item) => item.id === id).friendCode);
        break;
      case Games.MAIMAI:
        setCopyText(acGameItems.find((item) => item.id === id).friendCode);
        break;

      default:
        break;
    }
    toast({
      title: `${
        acGameItems.find((item) => item.id === id).title
      }のフレンドコードをコピーしました。`,
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
      p={5}
      borderRadius="20px"
    >
      <Tag variant="solid" size="lg" rounded="lg" colorScheme="green" mb="5px">
        AC Game
      </Tag>
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        ml="2vh"
        mt="2vh"
        width="90%"
      >
        {acGameItems.map((item) => {
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
