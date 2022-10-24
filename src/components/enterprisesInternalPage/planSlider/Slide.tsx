import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { ContainedSecondaryButton } from "../../commons/Button";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import Image from "next/image";

type Props = {
  image: string;
  label: string;
  handleOpenFullScreen: () => void;
};

const Slide = ({ image, label, handleOpenFullScreen }: Props) => {
  const { md } = useBreakpoint();

  return (
    <Stack
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box sx={sxImageBox}>
        {md ? (
          <InnerImageZoom
            src={image}
            zoomSrc={image}
            zoomType="hover"
            hideHint={true}
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              "& .react-transform-wrapper, .react-transform-component": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            <TransformWrapper>
              <TransformComponent>
                <Image
                  src={image}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </TransformComponent>
            </TransformWrapper>
          </Box>
        )}

        {md && (
          <ContainedSecondaryButton
            sx={sxButton}
            onClick={() => handleOpenFullScreen()}
          >
            TELA CHEIA
          </ContainedSecondaryButton>
        )}
      </Box>
      <Typography
        textAlign="center"
        sx={{ mt: 3 }}
        fontSize={18}
        fontWeight={500}
      >
        {label}
      </Typography>
    </Stack>
  );
};

const sxImageBox = {
  height: "100%",
  width: { xs: "100%", md: "unset" },
  overflow: "hidden",
  position: "relative",
  "& > .iiz > div": { height: "100%" },
  "&:hover": {
    "& > button": {
      transform: "translate(-50%, -100%)",
    },
  },
};

const sxButton = {
  position: "absolute",
  bottom: "0",
  left: "50%",
  transform: "translate(-50%, 100%)",
};

export default Slide;
