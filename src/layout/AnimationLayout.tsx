import React from 'react';
import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

export const AnimationLayout: React.FC<MotionProps> = (props: MotionProps) => {
  const Motion: React.FC<MotionProps> = motion(chakra.div);

  return (
    <Motion
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{ delay: 0.1 }}
      exit={{ opacity: 0 }}
      width="100%"
      height="100%"
    >
      {props.children}
    </Motion>
  );
};
