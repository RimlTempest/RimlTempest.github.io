import {
  useColorMode,
  Switch,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

/* TODO:StatelessなのでReact.VFCに置き換える */
export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark: boolean = colorMode === 'dark';
  const SwitchIcon: IconType = useColorModeValue(FaMoon, FaSun);
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
