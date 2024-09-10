import { Box, Stack, Typography } from "@mui/material";

interface IStatusBarProps {
  title: string;
  value: number;
}

export const StatusBar = ({ title, value }: IStatusBarProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={4}
    >
      <Box
        bgcolor="white"
        sx={{ width: "100%", height: "3rem", position: "relative" }}
      >
        <Box
          bgcolor="secondary.main"
          sx={{
            position: "absolute",
            width: value / 100,
            height: "100%",
            overflowX: "hidden",
            display: "flex",
            alignItems: "center",
            zIndex: 15,
          }}
        >
          <Typography
            sx={{ color: "white", ml: 4 }}
            fontSize={13}
            fontWeight={500}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            px: 4,
            zIndex: 10,
          }}
        >
          <Typography
            sx={{ color: "secondary.main" }}
            fontSize={13}
            fontWeight={500}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "5ch" }}>
        <Typography textAlign="right" fontSize={17} fontWeight={700}>
          {value}%
        </Typography>
      </Box>
    </Stack>
  );
};
