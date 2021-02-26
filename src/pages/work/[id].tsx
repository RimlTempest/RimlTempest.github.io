import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Layout } from '../../layout/Layout';
import { useRouter } from 'next/router';

const Work = () => {
  const router = useRouter();
  const [post, setPost] = useState(router.query.id);

  useEffect(() => {
    setPost(router.query.id);
  }, [router.query.id]);

  return (
    <Layout height="100vh">
      <Flex flexDirection="column" p={10} width="100%" height="100%">
        <Text fontSize="3xl" textAlign="center" letterSpacing="wide">
          {post}
        </Text>
      </Flex>
    </Layout>
  );
};

export default Work;
