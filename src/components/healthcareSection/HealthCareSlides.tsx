import React from "react";
import { Flex, Stack, Text, SystemStyleObject } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const HealthCareSlides = ({
  groupHover,
}: {
  groupHover: SystemStyleObject;
}) => {
  const slidesData = [
    {
      body: "Nearly half of U.S. physicians say language or other cultural barriers are obstacles to providing high-quality patient care",
    },
  ];
  return (
    <Flex
      bg="#AE64A7E5"
      color="#fff"
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
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-icon-next",
          prevEl: ".swiper-icon-prev",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slidesData.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack
              height={{ base: "250px", sm: "300px", md: "400px", lg: "500px" }}
              align="center"
              justifyContent="center"
              textAlign="center"
        
            >
            
              <Text
                fontSize={{ base: "8px", sm: "12px", lg: "24px" }}
                textAlign="center"
              >
                {item.body}
              </Text>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default HealthCareSlides;
