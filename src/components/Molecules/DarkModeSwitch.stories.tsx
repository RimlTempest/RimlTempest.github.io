import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DarkModeSwitch } from './DarkModeSwitch';

export default {
  title: 'Molecules/DarkModeSwitch',
  component: DarkModeSwitch,
} as Meta;

const Template: Story = () => <DarkModeSwitch />;

export const DarkModeSwitchDefault = Template.bind({});
