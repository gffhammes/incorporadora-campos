import { Container, Stack } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { defaultSectionPadding } from "../../../constants/defaultSectionPadding";

interface ITextProps {
  text: string;
}

export const Text = ({ text }: ITextProps) => {
  return (
    <Container maxWidth="md" sx={{ pt: 5, pb: defaultSectionPadding }}>
      <Stack
        spacing={4}
        sx={{
          "& > p": {
            fontStyle: "italic",
            "& > img": { maxWidth: "100%", borderRadius: 2 },
          },
        }}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </Stack>
    </Container>
  );
};
