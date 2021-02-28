import React from 'react';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { WorkCardProps } from '../../types/CardTypes';
import { useRecoilState } from 'recoil';
import { workState } from '../../store/WorkStore';

export const WorkCard = (props: WorkCardProps) => {
  const router = useRouter();
  const [workList, setWorkList] = useRecoilState(workState);

  const BoxClicked = () => {
    const data = {
      image: props.image,
      appName: props.appName,
      description: props.description,
    };
    setWorkList((state) => ({
      ...state,
      workList: data,
    }));

    router.push({ pathname: 'work/' + props.navigationLink });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={5}
      onClick={BoxClicked}
      cursor="pointer"
    >
      <Box
        bg={useColorModeValue('whiteAlpha.800', 'grayAlpha.200')} // "#ffffff"
        borderRadius="20px"
        width="250px"
        border="1px solid lightgrey"
        overflow="hidden"
        maxHeight="550px"
      >
        <Box>
          <Image
            size="100px"
            fallbackSrc={
              !props.fallbackSrc
                ? 'https://via.placeholder.com/150'
                : props.fallbackSrc
            }
            src={props.image}
            width="100%"
            height="auto"
            alt="appIcon"
            maxHeight="165px"
          />
        </Box>
        <Box p={5} pb={8} maxHeight="300px">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            mb={1}
            flexDirection="row"
          />
          <Text
            fontWeight="bold"
            fontSize="xl"
            color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
          >
            {props.appName}
          </Text>
          <Text
            fontSize="sm"
            mb={3}
            minHeight="100px"
            maxHeight="150px"
            color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
          >
            {props.description}
          </Text>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <BsBoxArrowUpRight />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
