import { Box, Container } from "@mui/material";
import React from "react";
import { SectionTitle } from "../../commons/SectionTitle";
import OurHistorySlider from "./OurHistorySlider";

interface IOurHistorySectionProps {
  slides: any[];
}

const OurHistorySection = ({ slides }: IOurHistorySectionProps) => {
  return (
    <Box bgcolor="#E4E2E7" sx={{ py: 10 }}>
      <Container>
        <SectionTitle divider={false} sx={{ mb: 5 }}>
          NOSSA HISTÓRIA
        </SectionTitle>
      </Container>

      <OurHistorySlider slides={slides} />
    </Box>
  );
};

export default OurHistorySection;
