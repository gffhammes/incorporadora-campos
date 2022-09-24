import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import InnerImageZoom from "react-inner-image-zoom";

type Props = {
  imageSrc: string;
  title?: string;
};

const sxEmblaSlide = {
  position: "relative",
  flex: "0 0 100%",
  marginRight: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  "& > .iiz": { m: "auto" },
  "& > .iiz > div": { height: "100%" },
  "& > .iiz > div > img": { objectFit: "contain" },
};

export const Slide = ({ imageSrc, title }: Props) => {
  return (
    <Box sx={sxEmblaSlide}>
      <InnerImageZoom
        src={imageSrc}
        zoomSrc={imageSrc}
        zoomType="click"
        hideHint={true}
        zoomScale={2}
      />
      {title && (
        <Box
          sx={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            p: 2,
            borderRadius: 1,
            backgroundColor: "white",
          }}
        >
          <Typography sx={{ m: "auto" }}>{title}</Typography>
        </Box>
      )}
    </Box>
  );
};
