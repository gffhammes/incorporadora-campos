import { Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const EnterpriseCardDataButton = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      className="enterprise-button"
    >
      <Typography fontSize={12} color="secondary">
        SAIBA MAIS
      </Typography>

      <Stack
        justifyContent="center"
        sx={{
          fontSize: 10,
          height: "100%",
        }}
      >
        <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
      </Stack>
    </Stack>
  );
};
