import React from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  SystemStyleObject,
} from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HealthCareSlides = ({
  groupHover,
}: {
  groupHover: SystemStyleObject;
}) => {
  return (
    <Flex
      bg="#AE64A7E5"
      color="#fff"
      px="70px"
      borderRadius="full"
      pos="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-1}
      opacity={0}
      transition="0.3s"
      _groupHover={groupHover}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Stack
            height="500px"
            align="center"
            justifyContent="center"
            px="45px"
            textAlign="center"
          >
            <Heading fontSize="38px" fontFamily="mono">
              Lorem ipsum
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Vitae egestas ut ultricies
              adipiscing at luctus erat mauris ut.
            </Text>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            height="500px"
            align="center"
            justifyContent="center"
            px="45px"
            textAlign="center"
          >
            <Heading fontSize="38px" fontFamily="mono">
              Lorem ipsum
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Vitae egestas ut ultricies
              adipiscing at luctus erat mauris ut.
            </Text>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            height="500px"
            align="center"
            justifyContent="center"
            px="45px"
            textAlign="center"
          >
            <Heading fontSize="38px" fontFamily="mono">
              Lorem ipsum
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Vitae egestas ut ultricies
              adipiscing at luctus erat mauris ut.
            </Text>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default HealthCareSlides;
