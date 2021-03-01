import React from 'react';
import { Progress } from '@chakra-ui/react';
import { SkillProgressProps } from '../../types/SkillProgressTypes';

export const SkillProgress: React.FC<SkillProgressProps> = (
  props: SkillProgressProps
) => {
  return (
    <Progress
      value={props.value}
      max={!props.max ? 100 : props.max}
      colorScheme={!props.colorScheme ? 'whatsapp' : props.colorScheme}
      hasStripe
      isAnimated
      size="lg"
      border="1px solid green"
      height={3}
      minWidth="100px"
      ml={2}
    />
  );
};
