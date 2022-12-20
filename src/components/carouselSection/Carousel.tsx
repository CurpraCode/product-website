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
import { IconType } from "react-icons/lib";

const Carousel = () => {
  const cards: { icon: IconType; title: string; body: string }[] = [
    {
      icon: MdLocationOn,
      title: "Quality Interpreters",
      body: "60+ Langauges available for interpretations",
    },
    {
      icon: AiFillClockCircle,
      title: "Instant Access",
      body: "Access to both Video and Audio mean of interpretation",
    },
    {
      icon: IoMdHeadset,
      title: "Support",
      body: "24/7 assistance for your need",
    },
    {
      icon: AiFillClockCircle,
      title: "Instant Access",
      body: "Access to both Video and Audio mean of interpretation",
    },
    {
      icon: MdPrivacyTip,
      title: "Privacy",
      body: "100% secured application for your own privacy",
    },
    {
      icon: MdLocationOn,
      title: "HIPAA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Stack>
      <Flex
        bg="#F4F6F9"
        bgGradient="linear(180deg, #FFF 50%, #F4F6F9 50%)"
        py="10px"
        px={[5, 70]}
      >
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          navigation
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
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CarouselCard
                IconName={card.icon}
                title={card.title}
                body={card.body}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Stack>
  );
};

export default Carousel;
