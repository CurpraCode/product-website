import React from "react";
import "../../styles/Home.module.css";

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
  const cards: {
    icon: IconType;
    title: string;
    body: string;
    imgSrc: string;
  }[] = [
    {
      icon: MdLocationOn,
      title: "Quality Interpreters",
      body: "60+ Langauges available for interpretations",
      imgSrc: "/carousel-quality.png",
    },
    {
      icon: AiFillClockCircle,
      title: "Instant Access",
      body: "Access to both Video and Audio mean of interpretation",
      imgSrc: "/carousel-instant.png",
    },
    {
      icon: IoMdHeadset,
      title: "Support",
      body: "24/7 assistance for your need",
      imgSrc: "/carousel-support.png",
    },

    {
      icon: MdPrivacyTip,
      title: "Privacy",
      body: "100% secured application for your own privacy",
      imgSrc: "/carousel-privacy.png",
    },
    {
      icon: MdLocationOn,
      title: "HIPAA",
      body: "As per federal law our services are HIPAA compliant and secure.",
      imgSrc: "/carousel-hipaa.png",
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
              width: 540,
              slidesPerView: 1,
            },
            999: {
              width: 768,
              slidesPerView: 1,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CarouselCard
                IconName={card.icon}
                title={card.title}
                body={card.body}
                imgSrc={card.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Stack>
  );
};

export default Carousel;
