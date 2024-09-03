import { Box, Container } from "@mui/material";
import Link from "next/link";
import { ContainedPrimaryButton } from "../commons/Button";
import { SectionTitle } from "../commons/SectionTitle";
import { EnterprisesSlider } from "./EnterprisesSlider/EnterprisesSlider";
import { enterprises } from "../../data/enterprises";

export const EnterprisesSection = () => {
  return (
    <Box bgcolor="#f2f2f2">
      <Container sx={{ py: 7 }}>
        <SectionTitle theme="dark" marginBottom={false}>
          PORTFÓLIO
        </SectionTitle>

        <EnterprisesSlider enterprises={enterprises} loading={false} />

        <Box sx={{ display: "flex", mt: 6 }}>
          <Link href="/portfolio" passHref>
            <a style={{ margin: "auto auto" }}>
              <ContainedPrimaryButton>VEJA TODOS</ContainedPrimaryButton>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
