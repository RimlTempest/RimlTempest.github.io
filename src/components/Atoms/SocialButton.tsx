import * as React from 'react';
import { chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { SocialProps } from '../../types/SocialTypes';

export const SocialButton: React.FC<SocialProps> = ({
  children,
  label,
  href,
}: SocialProps) => {
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
