import { Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const EnterpriseCardDataButton = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      className="enterprise-button"
    >
      <Typography color="secondary">SAIBA MAIS</Typography>

      <Stack
        justifyContent="center"
        sx={{
          fontSize: 12,
          height: "100%",
        }}
      >
        <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
      </Stack>
    </Stack>
  );
};
