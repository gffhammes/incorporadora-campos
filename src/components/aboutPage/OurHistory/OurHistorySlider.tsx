import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Slider } from "../../commons/Slider";
import { OurHistorySlide } from "./OurHistorySlide/OurHistorySlide";
import { IOurHistorySlide } from "../../../interfaces/strapi";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export interface IOurHistorySliderProps {
  slides: IOurHistorySlide[];
}

const OurHistorySlider = (props: IOurHistorySliderProps) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const { md } = useBreakpoint();

  const handleYearClick = (e: any) => {
    setSelectedSlide(parseInt(e.target.id));
  };

  const handleNextSlide = () => {
    setSelectedSlide((selectedSlide) =>
      selectedSlide === props.slides.length - 1 ? 0 : selectedSlide + 1
    );
  };

  const slidesElements = useMemo(
    () =>
      props.slides.map((slide, index) => {
        return (
          <OurHistorySlide
            key={index}
            slide={slide}
            index={index}
            lastSlideIndex={props.slides.length - 1}
          />
        );
      }),
    [props.slides]
  );

  return (
    <Box>
      {md && (
        <Stack
          component="ul"
          direction="row"
          justifyContent="center"
          spacing={2}
          divider={
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ borderColor: "primary.main" }}
            />
          }
          sx={{ listStyle: "none", mb: 8 }}
        >
          {props.slides.map(({ ano: year }, index) => (
            <Box
              key={index}
              component="li"
              onClick={handleYearClick}
              id={index.toString()}
              sx={{
                transition: "300ms all ease",
                cursor: "pointer",
                fontWeight: 600,
                color:
                  selectedSlide === index ? "secondary.main" : "primary.main",
              }}
            >
              {year}
            </Box>
          ))}
        </Stack>
      )}
      <Box>
        <Slider
          slides={slidesElements}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
        />
      </Box>
      <Stack
        alignItems="center"
        onClick={handleNextSlide}
        sx={{
          color: "primary.main",
          width: "fit-content",
          mx: "auto",
          cursor: "pointer",
          mt: 8,
        }}
      >
        <ArrowForwardIcon color="inherit" />
        <Typography fontSize={16} letterSpacing={2} fontWeight={600}>
          ARRASTE
        </Typography>
      </Stack>
    </Box>
  );
};

export default OurHistorySlider;
