import { Box } from "@mui/material";

export interface IDashedLineProps {
  hide?: boolean;
}

export const DashedLine = ({ hide }: IDashedLineProps) => {
  if (hide) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        borderBottom: "3px dotted #0E1E42",
        width: "100vw",
        top: "50%",
        left: "45%",
        zIndex: 10,
      }}
    />
  );
};
