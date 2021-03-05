import React from 'react';
import { Td, Tr } from '@chakra-ui/react';
import { SkillProgress } from '../../components/Atoms/SkillProgress';
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
