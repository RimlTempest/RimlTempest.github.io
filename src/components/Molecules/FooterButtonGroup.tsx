import * as React from 'react';
import { Stack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { SocialButton } from '../Atoms/SocialButton';

export const FooterButtonGroup = () => {
  const twitter: string = 'https://twitter.com/Fande4d';
  const github: string = 'https://github.com/RimlTempest';
  const facebook: string = 'https://facebook.com/R1mlTempest';
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Twitter'} href={twitter}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'Github'} href={github}>
        <FaGithub />
      </SocialButton>
      <SocialButton label={'Instagram'} href={facebook}>
        <FaFacebook />
      </SocialButton>
    </Stack>
  );
};
