import React from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CardProps } from '../../types/CardTypes';
import { useLocale } from '../../hooks/useLocale';

export const ComingSoonCard: React.FC<CardProps> = (props: CardProps) => {
  const { i18n } = useLocale();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Box
        bg={useColorModeValue('whiteAlpha.800', 'grayAlpha.200')} // "#ffffff"
        borderRadius="20px"
        width="250px"
        border="1px solid lightgrey"
        overflow="hidden"
        maxHeight="550px"
      >
        <Box>
          <Image
            size="100px"
            fallbackSrc={
              !props.fallbackSrc
                ? 'https://via.placeholder.com/150'
                : props.fallbackSrc
            }
            width="100%"
            height="auto"
            alt="appIcon"
            maxHeight="165px"
          />
        </Box>
        <Box p={5} pb={8} maxHeight="300px">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            mb={1}
            flexDirection="row"
          />
          <Text fontWeight="bold" fontSize="xl">
            {i18n.FUTURE_RELEASE}
          </Text>
          <Text fontSize="sm" mb={3} minHeight="100px" maxHeight="150px"></Text>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <HiOutlineLockClosed />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
