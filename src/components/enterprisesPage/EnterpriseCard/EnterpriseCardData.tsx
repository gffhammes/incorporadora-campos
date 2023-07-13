import { Paper, Typography, Chip, Stack } from "@mui/material";
import { useMemo } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { TEnterpriseStatus } from "../../../interfaces/strapi";
import SellIcon from "@mui/icons-material/Sell";
import ConstructionIcon from "@mui/icons-material/Construction";
import { EnterpriseCardDataButton } from "./EnterpriseCardDataButton";
import Link from "next/link";

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
  slug,
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
    <Link href="/portfolio/[slug]" as={`/portfolio/${slug}`} passHref>
      <a style={{ width: "100%", height: "100%", gridArea: "data" }}>
        <Paper
          elevation={0}
          square
          sx={{
            height: "100%",
            width: "100%",
            p: { xs: 3, md: 4 },

            "&:hover": {
              "& .enterprise-button": {
                animation: `wobbling 1500ms`,

                "@keyframes wobbling": {
                  "0%": {
                    transform: "translateX(0%)",
                  },

                  "50%": {
                    transform: "translateX(2%)",
                  },

                  "100%": {
                    transform: "translateX(-0%)",
                  },
                },
              },
            },
          }}
        >
          <Stack height="100%" justifyContent="center">
            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography
                  variant="h2"
                  fontSize={{ xs: "1.25rem", md: "1.5rem" }}
                  color="secondary"
                  fontWeight={500}
                >
                  {name.toUpperCase()}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Chip
                    label={
                      <Typography
                        fontSize={{ xs: 10, md: 12 }}
                        fontWeight={500}
                      >
                        {status.toUpperCase()}
                      </Typography>
                    }
                    size="small"
                    variant="outlined"
                    color="secondary"
                    icon={<StatusIcon />}
                    sx={{
                      "&.MuiChip-root .MuiChip-icon": {
                        fontSize: 14,
                        ml: 1,
                      },
                      "& .MuiChip-label": {
                        px: 1.5,
                      },
                    }}
                  />

                  <Chip
                    sx={{
                      "& .MuiChip-label": {
                        px: 1.5,
                      },
                    }}
                    label={
                      <Typography
                        fontSize={{ xs: 10, md: 12 }}
                        fontWeight={500}
                        color="rgba(0, 0, 0, 0.75)"
                      >
                        {city.toUpperCase()}
                      </Typography>
                    }
                    size="small"
                    variant="outlined"
                  />
                </Stack>
              </Stack>

              <Typography whiteSpace="pre-wrap">{text}</Typography>

              <EnterpriseCardDataButton />
            </Stack>
          </Stack>
        </Paper>
      </a>
    </Link>
  );
};
