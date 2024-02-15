import { Box, Container } from "@mui/material";
import React from "react";
import { StatusCharts } from "./Charts/StatusCharts";
import { IEnterprise } from "../../interfaces/strapiLocal";

export interface IConstructionStatusSectionProps {
  enterpriseData: IEnterprise["attributes"];
}

export const ConstructionStatusSection = ({
  enterpriseData,
}: IConstructionStatusSectionProps) => {
  return (
    <Box bgcolor="#e7e7e7">
      <Container sx={{ py: 7 }}>
        <StatusCharts data={enterpriseData} />
      </Container>
    </Box>
  );
};
