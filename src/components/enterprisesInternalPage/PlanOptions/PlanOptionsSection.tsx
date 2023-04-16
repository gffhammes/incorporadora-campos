import { Box, Container } from "@mui/material";
import React, { useMemo, useState } from "react";
import { IPlan } from "../../../interfaces/strapi";
import { PlanSelector } from "./PlanSelector";

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

  console.log(selectedPlan);

  return (
    <Box id="plan-options">
      <Container sx={{ py: 7 }}>
        <PlanSelector
          plans={plans}
          selectedPlanIndex={selectedPlanIndex}
          onPlanClick={handleSelectorClick}
        />
      </Container>
    </Box>
  );
};
