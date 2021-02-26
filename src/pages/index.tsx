import React, { useEffect } from 'react';
import { Text, Box, Flex, useColorModeValue, Avatar } from '@chakra-ui/react';
import { Layout } from '../layout/Layout';

const colorGreen = {
  color: 'green.400',
};

const colorPink = {
  color: 'pink.200',
};

const Index = () => {
  return (
    <Layout height="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          p={10}
        >
          <Flex justifyContent="flex-start" alignItems="center">
            <Avatar size="2xl" src="/icon-512x512.png" />
            <Text
              color={useColorModeValue(colorGreen.color, colorPink.color)}
              fontSize="2xl"
              textAlign="center"
              letterSpacing="wider"
              ml={30}
              as="kbd"
            >
              Riml
            </Text>
          </Flex>
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text
              fontSize="5xl"
              fontWeight="bold"
              letterSpacing="wider"
              color={useColorModeValue(colorGreen.color, colorPink.color)}
              as="kbd"
            >
              Daiki Takahashi
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Index;
