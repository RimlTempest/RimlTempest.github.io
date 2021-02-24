import {
  useColorMode,
  Switch,
  useColorModeValue,
  chakra,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <Flex justifyContent="center" alignItems="center" direction="row">
      <SwitchIcon />
      <Switch
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
        marginLeft={3}
      />
    </Flex>
  );
};
