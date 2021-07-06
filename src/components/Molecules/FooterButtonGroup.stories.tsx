import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FooterButtonGroup } from './FooterButtonGroup';

export default {
  title: 'Molecules/FooterButtonGroup',
  component: FooterButtonGroup,
} as Meta;

const Template: Story = () => <FooterButtonGroup />;

export const FooterButtonGroupDefault = Template.bind({});
