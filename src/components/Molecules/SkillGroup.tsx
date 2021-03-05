import React from 'react';
import { Flex, Td, Text, Tr } from '@chakra-ui/react';
import { SkillProgress } from '../../components/Atoms/SkillProgress';
import { CopyIcon } from '@chakra-ui/icons';
import { SkillGroupProps } from '../../types/SkillGroupTypes';

export const SkillGroup: React.FC<SkillGroupProps> = (
  props: SkillGroupProps
) => {
  return (
    <>
      <Tr>
        <Td>{props.skillName}</Td>
        <Td>
          <SkillProgress value={props.progressValue} />
        </Td>
      </Tr>
    </>
  );
};
