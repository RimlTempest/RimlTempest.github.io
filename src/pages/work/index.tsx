import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { Layout } from '../../layout/Layout';
import { WorkCard } from '../../components/Organisms/WorkCard';
import { ComingSoonCard } from '../../components/Organisms/ComingSoonCard';
import { WorkTestData } from '../../types/Work';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';

const Work: React.FC = () => {
  const { i18n }: Locale = useLocale();
  return (
    <Layout height="100vh">
      <Flex flexDirection="column" p={10} width="100%" height="100%">
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          mb={5}
          mt={5}
        >
          <Text fontSize="3xl" textAlign="center" letterSpacing="wide">
            {i18n.PRODUCTS_TITLE}
          </Text>
        </Flex>
        <Flex
          overflow="visible"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="row"
        >
          <Flex
            overflow="scroll"
            justifyContent="flex-start"
            alignItems="center"
          >
            {WorkTestData.map((items, key) => {
              return (
                <WorkCard
                  key={key}
                  image={items.image}
                  appName={items.appName}
                  description={items.description}
                  navigationLink={items.navigationLink}
                />
              );
            })}
            <ComingSoonCard />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Work;
