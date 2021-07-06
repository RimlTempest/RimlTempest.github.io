import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SkillProgress } from './SkillProgress';
import { SkillProgressProps } from '../../types/SkillProgressTypes';

export default {
  title: 'Atoms/SkillProgress',
  component: SkillProgress,
} as Meta;

const Template: Story<SkillProgressProps> = (args) => (
  <SkillProgress {...args} />
);

export const SkillProgresDefault = Template.bind({});
SkillProgresDefault.args = {
  max: 100,
  value: 50,
} as SkillProgressProps;

export const SkillProgresMax = Template.bind({});
SkillProgresMax.args = {
  max: 100,
  value: 100,
} as SkillProgressProps;

export const SkillProgresCustomColor = Template.bind({});
SkillProgresCustomColor.args = {
  max: 100,
  value: 50,
  colorScheme: 'red',
} as SkillProgressProps;
