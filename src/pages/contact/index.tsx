import React from 'react';
import { Flex, Text, Grid, Heading } from '@chakra-ui/react';
import { FullLayout } from '../../layout/FullLayout';
import { SnsCard } from '../../components/Organisms/SnsCard';
import { SubSnsCard } from '../../components/Organisms/SubSnsCard';
import { ACGameCard } from '../../components/Organisms/ACGameCard';
import { MobileGameCard } from '../../components/Organisms/MobileGameCard';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';

const Contact: React.FC = () => {
  const { i18n }: Locale = useLocale();
  return (
    <FullLayout>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        mb={5}
        mt={5}
      >
        <Heading as="h2" size="2xl" textAlign="center" letterSpacing="wide">
          {i18n.CONTACT_TITLE}
        </Heading>
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
            lg: 'repeat(2, minmax(460px, 1fr))',
          }}
          gap={5}
        >
          <SnsCard title={i18n.CONTACT_CARD_TITLE} color="red" />
          <SubSnsCard title={i18n.SUB_CONTACT_CARD_TITLE} color="twitter" />
          <ACGameCard />
          <MobileGameCard />
        </Grid>
      </Flex>
    </FullLayout>
  );
};

export default Contact;
