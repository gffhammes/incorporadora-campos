import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { StatusBar } from "./StatusBar";
import { IEnterprise } from "../../../interfaces/strapiLocal";

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

export interface IStatusChartsProps {
  data: IEnterprise["attributes"];
}

export function StatusCharts({ data }: IStatusChartsProps) {
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
          <StatusBar
            title="PROJETOS E APROVAÇÕES"
            value={data.StatusDetalhado.ProjetosEAprovacoes}
          />
          <StatusBar title="FUNDAÇÃO" value={data.StatusDetalhado.Fundacao} />
          <StatusBar title="ESTRUTURA" value={data.StatusDetalhado.Estrutura} />
          <StatusBar title="ALVENARIA" value={data.StatusDetalhado.Alvenaria} />
          <StatusBar
            title="INSTALAÇÕES"
            value={data.StatusDetalhado.Instalacoes}
          />
          <StatusBar
            title="ACABAMENTOS"
            value={data.StatusDetalhado.Acabamentos}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
