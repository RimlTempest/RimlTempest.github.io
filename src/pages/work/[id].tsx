import React, { useEffect, useState } from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { Layout } from '../../layout/Layout';
import { NextRouter, useRouter } from 'next/router';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { WorkState, workState } from '../../store/WorkStore';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';

const Works: React.FC = () => {
  const router: NextRouter = useRouter();
  const [query, setPost] = useState(router.query);
  const [workList, setWorkList]: [
    WorkState,
    SetterOrUpdater<WorkState>
  ] = useRecoilState(workState);
  const { i18n }: Locale = useLocale();

  useEffect(() => {
    setPost(router.query);
  }, [router.query.id]);

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
            {i18n.PRODUCT_TITLE}
          </Text>
        </Flex>
        <Flex
          overflow="visible"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          opacity={1}
        >
          <Flex justifyContent="center" alignItems="center" width="100%" mb={5}>
            <Image
              src={workList.workList.image}
              fallbackSrc={'https://via.placeholder.com/150'}
              objectFit="cover"
              boxSize="80%"
              maxW={'300px'}
              alt="appImage"
            />
          </Flex>
          <Text fontSize="2xl" mb={5} ml={5}>
            {workList.workList.appName}
          </Text>
          <Flex
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text width="70%" backgroundColor="blackAlpha.200" p={5}>
              {workList.workList.description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Works;
