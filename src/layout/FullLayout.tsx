import { Flex, useColorMode } from '@chakra-ui/react';
import { Header } from '../components/Organisms/Header';
import { Footer } from '../components/Organisms/Footer';

export const FullLayout = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        <Header />
        <Flex flexDirection="column" p={10} width="100%" height="100%">
          {props.children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};
