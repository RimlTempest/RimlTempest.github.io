import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Layout } from '../../layout/Layout';
import { WorkCard } from '../../components/Organisms/WorkCard';
import { ComingSoonCard } from '../../components/Organisms/ComingSoonCard';

const Work = () => {
  const testData = [
    {
      image:
        'https://github.com/RimlTempest/dotart/blob/develop/Front/dotart/static/icon.png?raw=true',
      appName: 'DotArt',
      description:
        'Webでかんたんにドット絵が書けるサービスです。\n https://github.com/RimlTempest/dotart',
      navigationLink: 'DotArt',
    },
    {
      image: '/noimage.jpg',
      appName: 'Kizuna',
      description:
        'あいことばを入力するだけで通話できる簡易ビデオ通話アプリ。現在プライベート設定中\n https://github.com/RimlTempest/d4tj',
      navigationLink: 'Kizuna',
    },
    {
      image: '/noimage.jpg',
      appName: '福島タイピング',
      description:
        '福島県を題材にしたタイピングアプリ。現在プライベート設定中\n https://github.com/RimlTempest/chiikikassei',
      navigationLink: 'F_Typing',
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
