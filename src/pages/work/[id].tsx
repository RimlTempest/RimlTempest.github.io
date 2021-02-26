import React, { useEffect, useState } from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { Layout } from '../../layout/Layout';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { workState } from '../../store/WorkStore';

const Work = () => {
  const router = useRouter();
  const [query, setPost] = useState(router.query);
  const [workList, setWorkList] = useRecoilState(workState);

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
            Work
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

export default Work;
