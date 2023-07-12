import { Paper, Typography, Chip, Stack } from "@mui/material";
import { useMemo } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { TEnterpriseStatus } from "../../../interfaces/strapi";
import SellIcon from "@mui/icons-material/Sell";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface IEnterpriseCardDataProps {
  name: string;
  status: TEnterpriseStatus;
  city: string;
  text: string;
  slug: string;
}

export const EnterpriseCardData = ({
  name,
  city,
  //   slug,
  status,
  text,
}: IEnterpriseCardDataProps) => {
  const StatusIcon = useMemo(() => {
    switch (status) {
      case "Pré lançamento":
        return AutoAwesomeIcon;

      case "Em obra":
        return ConstructionIcon;

      case "Vendido":
        return SellIcon;
    }
  }, [status]);

  return (
    <Paper elevation={0} square sx={{ p: 4, gridArea: "data" }}>
      <Stack height="100%" justifyContent="center">
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              variant="h2"
              fontSize="1.5rem"
              color="secondary"
              fontWeight={500}
            >
              {name.toUpperCase()}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Chip
                label={
                  <Typography fontSize={12} fontWeight={500}>
                    {status.toUpperCase()}
                  </Typography>
                }
                size="small"
                variant="outlined"
                color="secondary"
                icon={<StatusIcon fontSize="small" />}
              />

              <Chip
                label={
                  <Typography fontSize={12} fontWeight={500}>
                    {city.toUpperCase()}
                  </Typography>
                }
                size="small"
                variant="outlined"
              />
            </Stack>
          </Stack>

          <Typography whiteSpace="pre-wrap">{text}</Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography color="secondary">SAIBA MAIS</Typography>

            <Stack
              justifyContent="center"
              sx={{ fontSize: 12, height: "100%" }}
            >
              <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
