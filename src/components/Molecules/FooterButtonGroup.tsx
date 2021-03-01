import * as React from 'react';
import { Stack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import { SocialButton } from '../Atoms/SocialButton';
import { SNS } from '../../types/Sns';

export const FooterButtonGroup: React.FC = () => {
  return (
    <Stack direction={'row'} spacing={6}>
      <SocialButton label={'Twitter'} href={SNS.TWITTER}>
        <FaTwitter />
      </SocialButton>
      <SocialButton label={'Github'} href={SNS.GITHUB}>
        <FaGithub />
      </SocialButton>
      <SocialButton label={'Facebook'} href={SNS.FACEBOOK}>
        <FaFacebook />
      </SocialButton>
    </Stack>
  );
};
