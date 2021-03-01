import React from 'react';
import { Flex, Tag } from '@chakra-ui/react';
import { SnsButtonGroup } from '../Molecules/SnsButtonGroup';
import { SnsCardProps } from '../../types/CardTypes';

export const SnsCard: React.FC<SnsCardProps> = (props: SnsCardProps) => {
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
      <Tag
        variant="solid"
        size="lg"
        rounded="lg"
        colorScheme={props.color}
        mb="5px"
      >
        {props.title}
      </Tag>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        mt="3vh"
        width="100%"
      >
        <SnsButtonGroup />
      </Flex>
    </Flex>
  );
};
