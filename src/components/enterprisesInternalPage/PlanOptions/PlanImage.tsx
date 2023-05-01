import { Box, CircularProgress, Stack } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import { TBreakpoint } from "../../../interfaces/general";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLoadingDebounce } from "../../../hooks/useLoadingDebounce";

export interface IPlanImageProps {
  imgUrl: string;
  zoomImgUrl: string;
}

const mobileImgDimentions = "100%";
const desktopImgDimentions = "min(40vw, 70vh)";

const breakpoint: TBreakpoint = "md";

export const PlanImage = ({ imgUrl }: IPlanImageProps) => {
  const { handleLoadingEnd, handleLoadingStart, loading } =
    useLoadingDebounce();
  const lastImgUrl = useRef(imgUrl);

  useEffect(() => {
    if (lastImgUrl.current === imgUrl) return;

    handleLoadingStart();
  }, [handleLoadingStart, imgUrl]);

  return (
    <Box
      sx={{
        height: { xs: mobileImgDimentions, [breakpoint]: desktopImgDimentions },
        width: { xs: mobileImgDimentions, [breakpoint]: desktopImgDimentions },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <InnerImageZoom
        src={imgUrl}
        zoomSrc={imgUrl}
        zoomType="hover"
        hideHint={true}
        zoomScale={1.25}
      />

      <Box
        sx={{
          height: "100%",
          width: "100%",
          zIndex: -1,
          position: "absolute",
          top: 0,
        }}
      >
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          onLoad={() => {
            handleLoadingEnd();
          }}
        />
      </Box>

      {loading && (
        <Stack
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 999,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            top: 0,
          }}
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Stack>
      )}
    </Box>
  );
};
