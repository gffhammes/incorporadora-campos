import { Box, Stack } from "@mui/material";

export type TDotsColors = "secondary" | "white" | "full-white";

interface IDotsProps {
  scrollSnaps: any[];
  selectedIndex: number;
  dotsColor: TDotsColors;
  dotsInside: boolean;
  handleClick: (index: number) => void;
}

export const Dots = ({
  scrollSnaps,
  selectedIndex,
  dotsColor,
  dotsInside,
  handleClick,
}: IDotsProps) => {
  const getActiveColor = () => {
    switch (dotsColor) {
      case "white":
        return "white";
      case "full-white":
        return "white";
      case "secondary":
        return "secondary.main";
    }
  };

  const getInactiveColor = () => {
    switch (dotsColor) {
      case "white":
        return "secondary.main";
      case "full-white":
        return "rgba(255,255,255,.35)";
      case "secondary":
        return "rgba(26, 72, 188, 0.5)";
    }
  };

  const activeColor = getActiveColor();
  const inactiveColor = getInactiveColor();

  const wrapperSx = dotsInside ? { mt: -3, position: "relative" } : { mt: 4 };

  return (
    <Stack direction="row" spacing={1} justifyContent="center" sx={wrapperSx}>
      {scrollSnaps.map((_, index) => (
        <Box
          key={index}
          role="button"
          onClick={() => handleClick(index)}
          sx={{
            cursor: "pointer",
            height: ".5rem",
            width: ".5rem",
            borderRadius: ".5rem",
            backgroundColor:
              selectedIndex === index ? activeColor : inactiveColor,
          }}
        />
      ))}
    </Stack>
  );
};
