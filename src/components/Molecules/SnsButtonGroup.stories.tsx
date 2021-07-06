import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SnsButtonGroup } from './SnsButtonGroup';

export default {
  title: 'molecules/SnsButtonGroup',
  component: SnsButtonGroup,
} as Meta;

const Template: Story = () => <SnsButtonGroup />;

export const SnsButtonGroupDefault = Template.bind({});
