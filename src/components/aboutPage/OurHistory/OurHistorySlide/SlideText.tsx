import { Typography } from "@mui/material";

interface ISlideTextProps {
  text: string;
}

export const SlideText = ({ text }: ISlideTextProps) => {
  return (
    <Typography
      fontSize={{ xs: 14, sm: 21 }}
      sx={{
        maxWidth: { xs: "unset", md: "28ch" },
        height: { xs: "5", sm: "5rem", md: "unset" },
      }}
    >
      {text}
    </Typography>
  );
};
