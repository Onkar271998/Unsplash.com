import { Box, Stack, Text } from "@chakra-ui/react";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Navbar2.css"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "gray",
        opacity: "70%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "white+-" }}
      onClick={onClick}
    />
  );
}

export default class Navbar2 extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 400,
      slidesToShow: 13,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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

    const initial = [
      
      
      "Current Events",
      
      "Wallpapers",
      
      "3D Renders",
      
      "Textures",
      
      "Experimental",
      
      "Architecture",
      
      "Nature",
      
      "Business & Work",
      
      "Fashion",
      
      "Film",
      
      
      
      "Current Events",
      
      "Wallpapers",
      
      "3D Renders",
      
      "Textures & Patterns",
      
      "Experimental",
      
      "Architecture",
      
      "Nature",
      
      "Business & Work",
      
      "Fashion",
      
      "Film",
      
      "Nature",
      
      "Business & Work",
      
      "Fashion",
      
      "Film",
    ];

    return (
      <>
        <Box display="flex">
          <Box>
            <Text>Editorial</Text>
          </Box>
          <Box width="91%" marginLeft="3%">
            <Slider {...settings}>
              {initial.map((e) => (
                <Stack direction={"row"}>
                  <Text   width="140%">{e}</Text>
                </Stack>
              ))}
            </Slider>
          </Box>
        </Box>
      </>
    );
  }
}
