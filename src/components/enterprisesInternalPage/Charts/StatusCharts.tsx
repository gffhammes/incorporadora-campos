import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { getAverageEnterpriseStatus } from "../../../helpers/getAverageEnterpriseStatus";
import { StatusBar } from "./StatusBar";

ChartJS.register(ArcElement, Tooltip, Legend);

const GeneralStatus = ({ status }) => {
  const data = {
    labels: ["ready", "waiting"],
    datasets: [
      {
        data: [status, 1 - status],
        backgroundColor: ["#1A47BC", "transparent"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    events: [],
    cutout: "90%",
  };

  return (
    <Box
      bgcolor="primary.main"
      sx={{
        aspectRatio: "1 / 1",
        width: "100%",
        maxWidth: "17rem",
        borderRadius: "20rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ position: "absolute" }}>
        <Typography sx={{ color: "white" }} fontSize={60} fontWeight={700}>
          {(status * 100).toFixed(0)}%
        </Typography>
      </Box>
      <Doughnut data={data} options={options} />
    </Box>
  );
};

export function StatusCharts({ data }) {
  return (
    <Grid container spacing={10} alignItems="center" justifyContent="center">
      <Grid item xs={8} md={4}>
        <Stack spacing={5} alignItems={{ xs: "center", md: "flex-start" }}>
          <Typography
            fontSize={{ xs: 16, sm: 28 }}
            fontWeight={500}
            letterSpacing={2}
            sx={{ color: "#0E1E42", whiteSpace: "nowrap" }}
          >
            STATUS DA OBRA
          </Typography>
          <GeneralStatus status={data.StatusGeral / 100} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={8}>
        <Stack
          spacing={1}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <StatusBar title="FUNDAÇÃO" value={data.Fundacao / 100} />
          <StatusBar title="ESTRUTURA" value={data.Infraestrutura / 100} />
          <StatusBar title="ALVENARIA" value={data.Alvenaria / 100} />
          <StatusBar title="INSTALAÇÕES" value={data.Instalacoes / 100} />
          <StatusBar title="ACABAMENTOS" value={data.Revestimentos / 100} />
        </Stack>
      </Grid>
    </Grid>
  );
}
