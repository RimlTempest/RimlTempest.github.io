import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Table, Tbody } from '@chakra-ui/react';

import { SkillGroup } from './SkillGroup';
import { SkillGroupProps } from '../../types/SkillGroupTypes';

export default {
  title: 'molecules/SkillGroup',
  component: SkillGroup,
} as Meta;

const Template: Story<SkillGroupProps> = (args) => (
  <Table size="sm">
    <Tbody>
      <SkillGroup {...args} />
    </Tbody>
  </Table>
);

export const SkillGroupDefault = Template.bind({});
SkillGroupDefault.args = {
  skillName: 'Next.js',
  progressValue: 50,
} as SkillGroupProps;
