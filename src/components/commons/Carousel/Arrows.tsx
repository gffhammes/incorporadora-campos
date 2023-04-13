import { IconButton, SxProps } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface IArrowsProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export const Arrows = ({ scrollPrev, scrollNext }: IArrowsProps) => {
  return (
    <>
      <IconButton onClick={scrollPrev} sx={{ ...sxArrowCommon, left: ".5rem" }}>
        <KeyboardArrowLeftIcon />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        sx={{ ...sxArrowCommon, right: ".5rem" }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </>
  );
};

const sxArrowCommon: SxProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
};
