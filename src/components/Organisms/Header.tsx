import * as React from 'react';
import { NextRouter, useRouter } from 'next/router';
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from '../Molecules/DarkModeSwitch';

const Links = [
  { id: 0, name: 'Profile', path: '/' },
  { id: 1, name: 'About', path: '/about' },
  { id: 2, name: 'Works', path: '/work' },
  { id: 3, name: 'Contact', path: '/contact' },
];

const colorGreen = {
  header: 'green.300',
  hover: 'green.200',
};

const colorPink = {
  header: 'pink.300',
  hover: 'pink.200',
};

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router: NextRouter = useRouter();

  return (
    <>
      <Box
        bg={useColorModeValue(colorGreen.header, colorPink.header)}
        px={4}
        width={'100%'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            backgroundColor={useColorModeValue(
              colorGreen.hover,
              colorPink.hover
            )}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link
                  key={link.id}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue(colorGreen.hover, colorPink.hover),
                    color: 'white',
                  }}
                  color="white"
                  onClick={() => router.push(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <DarkModeSwitch />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link
                  key={link.id}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue(colorGreen.hover, colorPink.hover),
                    color: 'white',
                  }}
                  // href={link.path}
                  color="white"
                  onClick={() => router.push(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
