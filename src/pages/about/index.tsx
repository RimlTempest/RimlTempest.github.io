import React from 'react';
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Text,
  List,
  ListItem,
  Divider,
  Progress,
} from '@chakra-ui/react';
import { EmailIcon, CopyIcon } from '@chakra-ui/icons';
import { Layout } from '../../layout/Layout';

const About = () => (
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
              <Text>髙橋 大貴 / Takahashi Daiki</Text>
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
                          <ListItem fontSize="sm">Connect2019　優秀賞</ListItem>
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
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={2}>HTML</Text>
                      <Progress
                        value={49}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>SCSS</Text>
                      <Progress
                        value={53}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>JavaScript</Text>
                      <Progress
                        value={66}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>TypeScript</Text>
                      <Progress
                        value={66}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" justifyContent="center" ml={10}>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>Next.js</Text>
                      <Progress
                        value={68}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>React.js</Text>
                      <Progress
                        value={68}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>Nuxt.js</Text>
                      <Progress
                        value={57}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="flex-start" alignItems="center" mb={2}>
                    <CopyIcon boxSize={5} />
                    <Flex flexDirection="column">
                      <Text pl={3}>Vue.js</Text>
                      <Progress
                        value={55}
                        max={100}
                        colorScheme="whatsapp"
                        hasStripe
                        isAnimated
                        size="lg"
                        border="1px solid green"
                        height={3}
                        minWidth="100px"
                        ml={2}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default About;
