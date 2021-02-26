import React from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { CardProps } from '../../types/CardTypes';

export const ComingSoonCard = (props: CardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={5}
    >
      <Box
        bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')} // "#ffffff"
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
            Coming Soon...
          </Text>
          <Text fontSize="sm" mb={3} minHeight="100px" maxHeight="150px"></Text>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <ArrowRightIcon
              boxSize={5}
              border="2px solid gray"
              borderRadius="50%"
              p={4}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
