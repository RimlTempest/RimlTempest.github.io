import React from 'react';
import { Text, Box, Flex, useColorModeValue, Avatar } from '@chakra-ui/react';
import { Layout } from '../layout/Layout';
import { motion } from 'framer-motion';

const colorGreen = {
  color: 'green.400',
};

const colorPink = {
  color: 'pink.200',
};

const Index: React.FC = () => {
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
            <motion.div whileHover={{ rotate: [0, 360] }}>
              <Avatar size="2xl" src="/icon-512x512.png" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Text
                color={useColorModeValue(colorGreen.color, colorPink.color)}
                fontSize="4xl"
                textAlign="center"
                letterSpacing="wider"
                ml={30}
                cursor="default"
              >
                Riml
              </Text>
            </motion.div>
          </Flex>
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Text
                fontSize="5xl"
                fontWeight="bold"
                letterSpacing="wider"
                color={useColorModeValue(colorGreen.color, colorPink.color)}
                cursor="pointer"
              >
                Daiki Takahashi
              </Text>
            </motion.div>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Index;
