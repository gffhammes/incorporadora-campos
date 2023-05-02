import { Box, Container, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import { IPlan } from "../../../interfaces/strapi";
import { PlanSelector } from "./PlanSelector";
import { PlanImage } from "./PlanImage";
import { SectionTitle } from "../../commons/SectionTitle";

export const PlanOptionsSection = ({ enterpriseData }) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const plans: IPlan[] = enterpriseData.Plantas;

  const selectedPlan = useMemo(
    () => plans[selectedPlanIndex],
    [plans, selectedPlanIndex]
  );

  const handleSelectorClick = (index: number) => {
    setSelectedPlanIndex(index);
  };

  const breakpoint = "md";

  return (
    <Box id="plan-options">
      <Container sx={{ pt: 7, pb: 2 }}>
        <SectionTitle>OPÇÕES DE PLANTA</SectionTitle>

        <Stack
          direction={{ xs: "column", [breakpoint]: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, [breakpoint]: 10 }}
        >
          <PlanSelector
            plans={plans}
            selectedPlanIndex={selectedPlanIndex}
            onPlanClick={handleSelectorClick}
            breakpoint={breakpoint}
          />

          <PlanImage
            imgUrl={selectedPlan.Foto.data.attributes.url}
            zoomImgUrl={selectedPlan.Foto.data.attributes.formats.large.url}
          />
        </Stack>
      </Container>
    </Box>
  );
};
