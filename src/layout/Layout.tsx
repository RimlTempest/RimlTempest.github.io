import { Flex, useColorMode } from '@chakra-ui/react';
import { Header } from '../components/Organisms/Header';
import { Footer } from '../components/Organisms/Footer';
import { ColorType } from '../types/ColorTypes';
import { LayoutProps } from '../types/LayoutTypes';

export const Layout: React.FC<LayoutProps> = (props) => {
  const { colorMode } = useColorMode();
  const bgColor: ColorType = { light: 'gray.50', dark: 'gray.900' };
  const color: ColorType = { light: 'black', dark: 'white' };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      >
        <Header />
        {props.children}
        <Footer />
      </Flex>
    </>
  );
};
