import React from 'react';
import {
  Button,
  Code,
  Flex,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import { GameGroupProps } from '../../types/GameGroupTypes';

const colorGreen = {
  color: 'green.400',
};

const colorPink = {
  color: 'pink.200',
};

export const GameGroup: React.FC<GameGroupProps> = (props: GameGroupProps) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      border="1px"
      p={2}
      mb={2}
      width="100%"
      position="relative"
    >
      <Stack
        spacing={2}
        p={3}
        alignItems="flex-start" /*width="16em"*/
        width="70%"
      >
        <Tag
          variant="outline"
          color={props.tagColor}
          colorScheme="whiteAlpha"
          border="1px"
        >
          <Text>{props.gameName}</Text>
        </Tag>
        <Code colorScheme="blackAlpha" width="100%">
          <Text color={useColorModeValue(colorGreen.color, colorPink.color)}>
            {props.friendCode}
          </Text>
        </Code>
      </Stack>
      <Button
        variant="outline"
        size="sm"
        rightIcon={<CopyIcon />}
        colorScheme="whatsapp"
        position="absolute"
        right="2%"
        onClick={props.copiedClicked}
      >
        Copy
      </Button>
    </Flex>
  );
};
