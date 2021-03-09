import React from 'react';
import {
  Avatar,
  Flex,
  Text,
  List,
  ListItem,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Badge,
  chakra,
} from '@chakra-ui/react';
import { SkillGroup } from '../../components/Molecules/SkillGroup';
import { FullLayout } from '../../layout/FullLayout';
import { useLocale } from '../../hooks/useLocale';
import { Locale } from '../../../locales/localeTypes';

const About: React.FC = () => {
  const { i18n }: Locale = useLocale();
  return (
    <FullLayout>
      <Flex flexDirection="column" pr={10} pl={10} width="100%" height="100%">
        <Flex
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          mb={5}
          mt={5}
        >
          <Heading as="h2" size="2xl" textAlign="center" letterSpacing="wide">
            {i18n.ABOUT_TITLE}
          </Heading>
        </Flex>
        <Flex
          overflow="visible"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDirection="column"
            backgroundColor="whiteAlpha.300"
            boxShadow={'0px 0px 33px -1px rgba(0, 0, 0, 0.45);'}
            p={5}
            position="relative"
          >
            <chakra.div
              borderLeft="40px solid transparent;"
              borderBottom="40px solid #68D391;"
              position="absolute"
              bottom={0}
              right={0}
            ></chakra.div>
            <Flex mb={5} justifyContent="center" width="100%">
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
                <Text fontSize="sm">髙橋 大貴</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Text>趣味</Text>
                <Flex mt="3">
                  <List styleType="disc" ml={5}>
                    <Accordion allowMultiple>
                      <AccordionItem>
                        <ListItem>
                          <AccordionButton>
                            <Box flex="1" textAlign="left" mr={5}>
                              <Text>VTuber、アニメ鑑賞などの動画鑑賞</Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <Flex flexDirection="row" alignItems="center">
                              <Text fontSize="sm">
                                VTuber最推しはホロライブ三期生の
                              </Text>
                              <Badge
                                variant="outline"
                                colorScheme="green"
                                ml="1"
                              >
                                潤羽るしあ
                              </Badge>
                            </Flex>
                            <Flex flexDirection="row" alignItems="center">
                              <Text fontSize="sm">一番好きなアニメは</Text>
                              <Badge
                                variant="outline"
                                colorScheme="cyan"
                                ml="1"
                              >
                                転生したらスライムだった件
                              </Badge>
                            </Flex>
                          </AccordionPanel>
                        </ListItem>
                      </AccordionItem>
                      {/* リズムゲーム */}
                      <AccordionItem>
                        <ListItem>
                          <AccordionButton>
                            <Box flex="1" textAlign="left" mr={5}>
                              <Text>リズムゲーム</Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <Flex flexDirection="row" alignItems="center">
                              <Badge variant="outline" colorScheme="pink">
                                第2回ガルパ杯
                              </Badge>
                              <Text fontSize="sm" ml="1">
                                二次予選出場（仙台）
                              </Text>
                            </Flex>
                            <Flex flexDirection="row" alignItems="center">
                              <Badge variant="outline" colorScheme="yellow">
                                チュウニズム
                              </Badge>
                              <Text fontSize="sm">、</Text>
                              <Badge variant="outline" colorScheme="purple">
                                maimai
                              </Badge>
                              <Text fontSize="sm" ml="1">
                                虹レート到達
                              </Text>
                            </Flex>
                            <Flex flexDirection="row" alignItems="center">
                              <Badge variant="outline" colorScheme="cyan">
                                BeatTube
                              </Badge>
                              <Text fontSize="sm" ml="1">
                                プレイヤーランキング 最大５位
                              </Text>
                            </Flex>
                          </AccordionPanel>
                        </ListItem>
                      </AccordionItem>
                      {/* プログラミング */}
                      <AccordionItem>
                        <ListItem>
                          <AccordionButton>
                            <Box flex="1" textAlign="left" mr={5}>
                              <Text>プログラミング</Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel pb={4}>
                            <Text fontSize="sm">Connect2019　優秀賞</Text>
                            <Text fontSize="sm">
                              校内ハッカソン最優秀賞、企業賞
                            </Text>
                          </AccordionPanel>
                        </ListItem>
                      </AccordionItem>
                    </Accordion>
                  </List>
                </Flex>
              </Flex>
              <Flex
                justifyContent="center"
                flexDirection="column"
                alignItems="flex-start"
                mt={3}
                mb={3}
              >
                <Text>Skill</Text>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  mt="5"
                >
                  <Tabs
                    isFitted
                    variant="soft-rounded"
                    colorScheme="green"
                    width="100%"
                  >
                    <TabList mb="1em" width="100%">
                      <Tab whiteSpace="nowrap">プログラミング</Tab>
                      <Tab whiteSpace="nowrap">フレームワーク</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Table size="sm">
                          <Thead>
                            <Tr>
                              <Th textAlign="center" whiteSpace="nowrap">
                                プログラミング
                              </Th>
                              <Th textAlign="center">学習率</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <SkillGroup skillName="HTML" progressValue={49} />
                            <SkillGroup skillName="SCSS" progressValue={53} />
                            <SkillGroup
                              skillName="JavaScript"
                              progressValue={66}
                            />
                            <SkillGroup
                              skillName="TypeScript"
                              progressValue={66}
                            />
                          </Tbody>
                        </Table>
                      </TabPanel>
                      <TabPanel>
                        <Table size="sm">
                          <Thead>
                            <Tr>
                              <Th textAlign="center" whiteSpace="nowrap">
                                フレームワーク
                              </Th>
                              <Th textAlign="center">学習率</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <SkillGroup
                              skillName="Next.js"
                              progressValue={68}
                            />
                            <SkillGroup
                              skillName="React.js"
                              progressValue={68}
                            />
                            <SkillGroup
                              skillName="Nuxt.js"
                              progressValue={57}
                            />
                            <SkillGroup skillName="Vue.js" progressValue={55} />
                          </Tbody>
                        </Table>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </FullLayout>
  );
};

export default About;
