import React from 'react';
import { Text, Box, Flex, useColorModeValue, Avatar } from '@chakra-ui/react';
import { Layout } from '../layout/Layout';

const Index = () => (
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
        <Flex justifyContent="flex-start" alignItems="center" mb={50}>
          <Avatar size="2xl" />
          <Text
            color="gray.500"
            fontSize="2xl"
            textAlign="center"
            letterSpacing="wider"
            ml={30}
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
            color="gray.500"
          >
            Daiki Takahashi
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Layout>
);

export default Index;
