import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

interface IAuthorProps {
  author: string;
  date: string;
}

export const Author = ({ author, date }: IAuthorProps) => {
  const dateObject = new Date(date);

  const dateToUse = dateObject.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Typography
        textAlign="center"
        fontSize={14}
        fontStyle="italic"
        sx={{ mb: 2 }}
      >
        Por <u>{author}</u> em {dateToUse}
      </Typography>
    </Container>
  );
};
