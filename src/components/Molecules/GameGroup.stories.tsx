import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { GameGroup } from './GameGroup';
import { GameGroupProps } from '../../types/GameGroupTypes';

export default {
  title: 'molecules/GameGroup',
  component: GameGroup,
} as Meta;

const Template: Story<GameGroupProps> = (args) => <GameGroup {...args} />;

export const GameGroupDefault = Template.bind({});
GameGroupDefault.args = {
  gameName: 'D4DJ',
  friendCode: 'qsZQX3iL',
  tagColor: 'purple.500',
  copiedClicked: action('clicked'),
} as GameGroupProps;
