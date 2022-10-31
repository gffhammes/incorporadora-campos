import { Box } from "@mui/material";

interface ITextProps {
  text: string;
}

export const Text = ({ text }: ITextProps) => {
  return (
    <Box>
      <Box
        component="p"
        dangerouslySetInnerHTML={{ __html: text }}
        sx={{ whiteSpace: "pre-wrap", maxWidth: "46ch", fontSize: 15 }}
      />
    </Box>
  );
};
