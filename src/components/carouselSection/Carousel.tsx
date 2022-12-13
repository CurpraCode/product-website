import React from "react";
import CarouselCard from "./CarouselCard";
import { MdLocationOn, MdPrivacyTip } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdHeadset } from "react-icons/io";
import { Flex, Stack } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Carousel = () => {
  return (
    <Stack>
      <Flex bg="#F4F6F9" px="70px">
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            999: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <CarouselCard IconName={MdLocationOn} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard IconName={AiFillClockCircle} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard IconName={IoMdHeadset} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard IconName={MdPrivacyTip} />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCard IconName={MdPrivacyTip} />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Stack>
  );
};

export default Carousel;
