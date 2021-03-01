import React from 'react';
import { Avatar, Flex, Text, List, ListItem, Divider } from '@chakra-ui/react';
import { Layout } from '../../layout/Layout';
import { SkillGroup } from '../../components/Molecules/SkillGroup';

const About: React.FC = () => {
  return (
    <Layout height="100vh">
      <Flex flexDirection="column" pr={10} pl={10} width="100%" height="100%">
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          mb={5}
          mt={5}
        >
          <Text fontSize="3xl" textAlign="center" letterSpacing="wide">
            About
          </Text>
        </Flex>
        <Flex
          overflow="visible"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          opacity={1}
        >
          <Flex
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            backgroundColor="whiteAlpha.300"
            p={5}
          >
            <Flex mb={5}>
              <Avatar size="2xl" />
              <Flex
                flexDirection="column"
                ml={5}
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="xl" letterSpacing="wider">
                  Riml
                </Text>
                <Text fontSize="sm">髙橋 大貴 / Takahashi Daiki</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Text>趣味</Text>
                <Flex>
                  <List styleType="disc" ml={5}>
                    <ListItem>動画鑑賞（Youtube、niconico動画）</ListItem>
                    <Flex flexDirection="row">
                      <Flex flexDirection="column">
                        <ListItem mt={3}>リズムゲーム</ListItem>
                        <Flex>
                          <Divider
                            borderColor="red.500"
                            orientation="vertical"
                            border="1px"
                            height="100%"
                          />
                          <List styleType="none" ml={2}>
                            <ListItem fontSize="sm">
                              第2回ガルパ杯　二次予選出場（仙台）
                            </ListItem>
                            <ListItem fontSize="sm">
                              チュウニズム、maimai 虹レート到達
                            </ListItem>
                            <ListItem fontSize="sm">
                              BeatTube PR 最大５位
                            </ListItem>
                          </List>
                        </Flex>
                      </Flex>
                      <List styleType="disc" ml={3}>
                        <ListItem mt={3} ml={3}>
                          プログラミング
                        </ListItem>
                        <Flex>
                          <Divider
                            borderColor="red.500"
                            border="1px"
                            orientation="vertical"
                            color="green.500"
                          />
                          <List styleType="none" ml={2}>
                            <ListItem fontSize="sm">Paiza Sランク到達</ListItem>
                            <ListItem fontSize="sm">
                              校内ハッカソン最優秀賞、企業賞
                            </ListItem>
                            <ListItem fontSize="sm">
                              Connect2019　優秀賞
                            </ListItem>
                          </List>
                        </Flex>
                      </List>
                    </Flex>
                  </List>
                </Flex>
              </Flex>
              <Flex justifyContent="center" alignItems="center" mt={3} mb={3}>
                <Divider
                  borderColor="green.500"
                  orientation="horizontal"
                  color="green.500"
                  border="1px"
                  width="100%"
                />
              </Flex>
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Text>Skill</Text>
                <Flex justifyContent="center" alignItems="center">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    ml={3}
                    alignItems="stretch"
                  >
                    <SkillGroup skillName="HTML" progressValue={49} />
                    <SkillGroup skillName="SCSS" progressValue={53} />
                    <SkillGroup skillName="JavaScript" progressValue={66} />
                    <SkillGroup skillName="TypeScript" progressValue={66} />
                  </Flex>
                  <Flex flexDirection="column" justifyContent="center" ml={10}>
                    <SkillGroup skillName="Next.js" progressValue={68} />
                    <SkillGroup skillName="React.js" progressValue={68} />
                    <SkillGroup skillName="Nuxt.js" progressValue={57} />
                    <SkillGroup skillName="Vue.js" progressValue={55} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default About;
