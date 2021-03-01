import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { SkillProgress } from '../../components/Atoms/SkillProgress';
import { CopyIcon } from '@chakra-ui/icons';
import { SkillGroupProps } from '../../types/SkillGroupTypes';

export const SkillGroup: React.FC<SkillGroupProps> = (
  props: SkillGroupProps
) => {
  return (
    <Flex justifyContent="flex-start" alignItems="center" mb={2}>
      <CopyIcon boxSize={5} />
      <Flex flexDirection="column">
        <Text pl={3}>{props.skillName}</Text>
        <SkillProgress value={props.progressValue} />
      </Flex>
    </Flex>
  );
};
