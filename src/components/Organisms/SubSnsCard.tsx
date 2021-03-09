import React from 'react';
import { chakra, Flex, Tag, Text } from '@chakra-ui/react';
import { SnsCardProps } from '../../types/CardTypes';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';
import { SocialButton } from '../Atoms/SocialButton';
import { ImYoutube } from 'react-icons/im';
import { SNS } from '../../types/Sns';
import { FaGithub } from 'react-icons/fa';

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
        {/* <Text fontSize="2xl">{i18n.FUTURE_RELEASE}</Text> */}
        <chakra.div mr={5}>
          <SocialButton label={'Youtube'} href={SNS.YOUTUBE}>
            <ImYoutube />
          </SocialButton>
        </chakra.div>
        <chakra.div mr={5}>
          <SocialButton label={'Github'} href={SNS.GITHUB}>
            <FaGithub />
          </SocialButton>
        </chakra.div>
      </Flex>
    </Flex>
  );
};
