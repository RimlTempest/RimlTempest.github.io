import * as React from 'react';
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';

type SocialTypes = {
  children: React.ReactNode;
  label: string;
  href: string;
};

export const SocialButton = ({ children, label, href }: SocialTypes) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
