import React from 'react';
import { Flex, Text, Grid } from '@chakra-ui/react';
import { FullLayout } from '../../layout/FullLayout';
import { SnsCard } from '../../components/Organisms/SnsCard';
import { SubSnsCard } from '../../components/Organisms/SubSnsCard';
import { ACGameCard } from '../../components/Organisms/ACGameCard';
import { MobileGameCard } from '../../components/Organisms/MobileGameCard';

const Contact: React.FC = () => {
  return (
    <FullLayout>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        mb={5}
        mt={5}
      >
        <Text fontSize="3xl" textAlign="center" letterSpacing="wide">
          Contact
        </Text>
      </Flex>
      <Flex
        overflow="visible"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        opacity={1}
        m={4}
      >
        <Grid
          templateColumns={{
            base: 'repeat(auto-fit, minmax(340px, 1fr))',
            sm: 'repeat(auto-fit, minmax(240px, 1fr))',
            md: 'repeat(auto-fit, minmax(340px, 1fr))',
            lg: 'repeat(2, minmax(500px, 1fr))',
          }}
          gap={5}
        >
          <SnsCard title="Contact" color="red" />
          <SubSnsCard title="SubContact" color="twitter" />
          <ACGameCard />
          <MobileGameCard />
        </Grid>
      </Flex>
    </FullLayout>
  );
};

export default Contact;
