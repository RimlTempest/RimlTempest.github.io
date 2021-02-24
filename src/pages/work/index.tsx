import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Layout } from '../../layout/Layout';

const Work = () => (
  <Layout height="100vh">
    <Flex flexDirection="column" p={10} width="100%" height="100%">
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        mb={5}
        mt={5}
      >
        <Text fontSize="3xl" textAlign="center" letterSpacing="wide">
          Works
        </Text>
      </Flex>
      <Flex
        overflow="visible"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
      >
        <Flex overflow="scroll" justifyContent="flex-start" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Box
              bg="#ffffff"
              borderRadius="20px"
              width="250px"
              border="1px solid lightgrey"
              overflow="hidden"
              maxHeight="550px"
            >
              <Box>
                <Image
                  size="100px"
                  fallbackSrc="https://via.placeholder.com/150"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  width="100%"
                  height="auto"
                  alt="appIcon"
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
                  アプリ名
                </Text>
                <Text fontSize="sm" mb={3} minHeight="100px" maxHeight="150px">
                  説明ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Box
              bg="#ffffff"
              borderRadius="20px"
              width="250px"
              border="1px solid lightgrey"
              overflow="hidden"
              maxHeight="550px"
            >
              <Box>
                <Image
                  size="100px"
                  fallbackSrc="https://via.placeholder.com/150"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  width="100%"
                  height="auto"
                  alt="appIcon"
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
                  アプリ名
                </Text>
                <Text fontSize="sm" mb={3} minHeight="100px" maxHeight="150px">
                  説明ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Box
              bg="#ffffff"
              borderRadius="20px"
              width="250px"
              border="1px solid lightgrey"
              overflow="hidden"
              maxHeight="550px"
            >
              <Box>
                <Image
                  size="100px"
                  fallbackSrc="https://via.placeholder.com/150"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  width="100%"
                  height="auto"
                  alt="appIcon"
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
                  アプリ名
                </Text>
                <Text fontSize="sm" mb={3} minHeight="100px" maxHeight="150px">
                  説明ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Box
              bg="#ffffff"
              borderRadius="20px"
              width="250px"
              border="1px solid lightgrey"
              overflow="hidden"
              maxHeight="550px"
            >
              <Box>
                <Image
                  size="100px"
                  fallbackSrc="https://via.placeholder.com/150"
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
                <Text
                  fontSize="sm"
                  mb={3}
                  minHeight="100px"
                  maxHeight="150px"
                ></Text>
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
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default Work;
