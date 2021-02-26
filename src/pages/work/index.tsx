import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Layout } from '../../layout/Layout';
import { WorkCard } from '../../components/Molecules/WorkCard';
import { ComingSoonCard } from '../../components/Molecules/ComingSoonCard';

const Work = () => {
  const testData = [
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      appName: 'testApp',
      description:
        '説明ああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      navigationLink: 'testApp',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      appName: 'AAAAAA',
      description: 'あいうえお',
      navigationLink: '12345',
    },
    {
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      appName: 'BBBBBB',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
      navigationLink: 'component',
    },
  ];
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
            Works
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
            {testData.map((items, key) => {
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
