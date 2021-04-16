import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image } from '@chakra-ui/react';
import { SocialButton } from './SocialButton';
import { SocialProps } from '../../types/SocialTypes';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SNS } from '../../types/Sns';

export default {
  title: 'Atoms/SocialButton',
  component: SocialButton,
} as Meta;

const Template: Story<SocialProps> = (args) => <SocialButton {...args} />;

export const SocialButtonTwitter = Template.bind({});
SocialButtonTwitter.args = {
  children: <FaTwitter />,
  label: 'Twitter',
  href: SNS.TWITTER,
} as SocialProps;

export const SocialButtonFacebook = Template.bind({});
SocialButtonFacebook.args = {
  children: <FaFacebook />,
  label: 'Facebook',
  href: SNS.FACEBOOK,
} as SocialProps;

export const SocialButtonGithub = Template.bind({});
SocialButtonGithub.args = {
  children: <FaGithub />,
  label: 'Github',
  href: SNS.GITHUB,
} as SocialProps;

export const SocialButtonYoutube = Template.bind({});
SocialButtonYoutube.args = {
  children: <FaYoutube />,
  label: 'Youtube',
  href: SNS.YOUTUBE,
} as SocialProps;

export const SocialButtonLine = Template.bind({});
SocialButtonLine.args = {
  children: <Image src="../../../public/LINE_SOCIAL_Circle.png" alt="LINE" />,
  label: 'LINE',
  href: SNS.LINE,
} as SocialProps;
