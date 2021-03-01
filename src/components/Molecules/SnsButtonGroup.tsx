import * as React from 'react';
import { chakra, Image } from '@chakra-ui/react';
import { SocialButton } from '../Atoms/SocialButton';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { SNS } from '../../types/Sns';

export const SnsButtonGroup: React.FC = () => {
  return (
    <>
      <chakra.div mr={5}>
        <SocialButton label={'Twitter'} href={SNS.TWITTER}>
          <ImTwitter />
        </SocialButton>
      </chakra.div>
      <chakra.div mr={5}>
        <SocialButton label={'Facebook'} href={SNS.FACEBOOK}>
          <ImFacebook />
        </SocialButton>
      </chakra.div>
      <chakra.div mr={5} mt={2}>
        <SocialButton label={'Line'} href={SNS.LINE}>
          <Image src="/LINE_SOCIAL_Circle.png" alt="LINE" />
        </SocialButton>
      </chakra.div>
    </>
  );
};
