import { Box } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";

export interface IPlanImageProps {
  imgUrl: string;
  zoomImgUrl: string;
}

const imgDimentions = "min(40vw, 70vh)";

export const PlanImage = ({ imgUrl }: IPlanImageProps) => {
  return (
    <Box
      sx={{ height: imgDimentions, width: imgDimentions, overflow: "hidden" }}
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
