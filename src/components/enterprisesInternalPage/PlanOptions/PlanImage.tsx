import { Box } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";

export interface IPlanImageProps {
  imgUrl: string;
  zoomImgUrl: string;
}

export const PlanImage = ({ imgUrl }: IPlanImageProps) => {
  return (
    <Box sx={{ height: "40vw", width: "40vw", overflow: "hidden" }}>
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
