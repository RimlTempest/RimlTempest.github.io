import React from 'react';
import { Flex, Tag, Text } from '@chakra-ui/react';
import { SnsCardProps } from '../../types/CardTypes';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';

export const SubSnsCard: React.FC<SnsCardProps> = (props: SnsCardProps) => {
  const { i18n }: Locale = useLocale();
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
        <Text fontSize="2xl">{i18n.FUTURE_RELEASE}</Text>
      </Flex>
    </Flex>
  );
};
