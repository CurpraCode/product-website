import React from "react";
import CarouselCard from "./CarouselCard";
import { MdLocationOn, MdPrivacyTip } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdHeadset } from "react-icons/io";
import { Stack, Box } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CarouselArrows";

const settings = {
  className: "my-carousel",
  // dots: true,
  infinite: false,
  speed: 500,
  // slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1924,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
      <Box
        bgGradient="linear(180deg, #FFF 50%, #F4F6F9 50%)"
        py="10px"
        w="100%"
        px={[0, 5, 70]}
      >
        <Slider {...settings}>
          {cards.map((card) => (
            // eslint-disable-next-line react/jsx-key
            <CarouselCard
              IconName={card.icon}
              title={card.title}
              body={card.body}
            />
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default Carousel;
