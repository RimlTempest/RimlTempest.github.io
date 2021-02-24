import React from 'react';
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Text,
  Tag,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { EmailIcon, InfoOutlineIcon, CopyIcon } from '@chakra-ui/icons';
import { Layout } from '../../layout/Layout';

const Contact = () => (
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
          Contact
        </Text>
      </Flex>
      <Flex
        overflow="visible"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        opacity={1}
      >
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          mb="10vh"
          backgroundColor="whiteAlpha.300"
          border="1px"
          p={5}
          borderRadius="20px"
        >
          <Tag
            variant="solid"
            size="lg"
            rounded="lg"
            colorScheme="red"
            mb="5px"
          >
            メイン連絡先
          </Tag>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            ml="5vh"
            mt="3vh"
          >
            <IconButton
              aria-label="icon"
              icon={<FaTwitter />}
              size="lg"
              mr={5}
            />
            <IconButton
              aria-label="icon"
              icon={<FaFacebook />}
              size="lg"
              mr={5}
            />
            <IconButton aria-label="icon" icon={<FaGithub />} size="lg" />
          </Flex>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          mb="10vh"
          backgroundColor="whiteAlpha.300"
          border="1px"
          p={5}
          borderRadius="20px"
        >
          <Tag
            variant="solid"
            size="lg"
            rounded="lg"
            colorScheme="twitter"
            mb="5px"
          >
            予備連絡先
          </Tag>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            ml="5vh"
            mt="3vh"
          >
            <IconButton
              aria-label="icon"
              icon={<FaTwitter />}
              size="lg"
              mr={5}
            />
            <IconButton
              aria-label="icon"
              icon={<FaFacebook />}
              size="lg"
              mr={5}
            />
            <IconButton aria-label="icon" icon={<FaGithub />} size="lg" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default Contact;
