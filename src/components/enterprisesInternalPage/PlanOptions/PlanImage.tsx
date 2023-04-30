import { Box } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import { TBreakpoint } from "../../../interfaces/general";

export interface IPlanImageProps {
  imgUrl: string;
  zoomImgUrl: string;
}

const mobileImgDimentions = "100%";
const desktopImgDimentions = "min(40vw, 70vh)";

const breakpoint: TBreakpoint = "md";

export const PlanImage = ({ imgUrl }: IPlanImageProps) => {
  return (
    <Box
      sx={{
        height: { xs: mobileImgDimentions, [breakpoint]: desktopImgDimentions },
        width: { xs: mobileImgDimentions, [breakpoint]: desktopImgDimentions },
        overflow: "hidden",
      }}
    >
      <InnerImageZoom
        src={imgUrl}
        zoomSrc={imgUrl}
        zoomType="hover"
        hideHint={true}
        zoomScale={1.25}
      />
    </Box>
  );
};
