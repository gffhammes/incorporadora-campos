import {
  Alert,
  Box,
  Container,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import GroundOfferForm from "./GroundOfferForm";
import RealStateAgentForm from "./RealStateAgentForm";

const boxShadow =
  "0px 10px 13px -6px rgb(26 71 188 / 20%), 0px 20px 31px 3px rgb(26 71 188 / 14%), 0px 8px 38px 7px rgb(26 71 188/ 12%);";

const sxFormWrapper = {
  position: "relative",
  width: "100%",
  backgroundColor: "white",
  transform: "translateY(-9rem)",
  marginBottom: "calc(5rem - 9rem)",
  zIndex: "500",
  boxShadow,
};

export const MainForms = () => {
  return (
    <Box>
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} sx={sxFormWrapper}>
          <RealStateAgentForm />
          <GroundOfferForm />
        </Stack>
      </Container>
      {/* <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Mensagem enviada com sucesso!</Alert>
      </Snackbar> */}
    </Box>
  );
};
