import React from "react";
import { Flex, Stack, Text, SystemStyleObject } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      {/* <div className="swiper-button swiper-icon-next">
        <IoIosArrowForward color="#fff" />
      </div>
      <div className="swiper-button swiper-icon-prev">
        <IoIosArrowBack color="#fff" />
      </div> */}
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
              // px={["35px", "45px"]}
              // w={["240px", "300px", "480px"]}
              // border="5px dotted blue"
            >
              {/* <Heading
                fontSize={{ base: "24px", lg: "42px" }}
                fontFamily="mono"
              >
                {item.title}
              </Heading> */}
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
