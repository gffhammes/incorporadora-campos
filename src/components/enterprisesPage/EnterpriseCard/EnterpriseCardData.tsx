import { Paper, Typography, Chip, Stack, Box } from "@mui/material";
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

      case "Lançamento":
        return AutoAwesomeIcon;

      case "Breve lançamento":
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
            p: 3,

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
          <Box
            display="grid"
            gridTemplateRows={{
              xs: "1fr",
              sm: "min-content min-content min-content",
              height: "100%",
            }}
            gap={{ xs: 3, sm: 2 }}
            alignContent="center"
          >
            <Stack spacing={0.5}>
              <Typography
                variant="h2"
                fontSize="1rem"
                color="secondary"
                fontWeight={700}
              >
                {name.toUpperCase()}
              </Typography>

              <Stack direction="row" spacing={1}>
                <Chip
                  label={
                    <Typography fontSize={10} fontWeight={500}>
                      {status.toUpperCase()}
                    </Typography>
                  }
                  size="small"
                  variant="outlined"
                  color="secondary"
                  icon={<StatusIcon />}
                  sx={{
                    "&.MuiChip-root": {
                      height: 20,

                      "& .MuiChip-icon": {
                        fontSize: 12,
                        ml: 0.5,
                      },
                    },
                    "& .MuiChip-label": {
                      px: 1,
                    },
                  }}
                />

                <Chip
                  sx={{
                    "&.MuiChip-root": {
                      height: 20,

                      "& .MuiChip-label": {
                        px: 1,
                      },
                    },
                  }}
                  label={
                    <Typography
                      fontSize={10}
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

            <Typography whiteSpace="pre-wrap" fontSize={12}>
              {text}
            </Typography>

            <EnterpriseCardDataButton />
          </Box>
        </Paper>
      </a>
    </Link>
  );
};
