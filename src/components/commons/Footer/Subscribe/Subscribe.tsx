import {
  Alert,
  Box,
  Container,
  Grid,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "../../Button";
import { Input } from "../../Input";
import { useRouter } from "next/router";
import SendIcon from "./SendIcon";
import { Formik } from "formik";
import { sendMail } from "../../../../services/sendMail";

export const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const validate = (values) => {
    const errors: { email?: string } = {};

    // if (!values.email) {
    //   errors.email = "Obrigatório";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //   errors.email = "Email inválido";
    // }

    return errors;
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    const data = {
      email: values.email,
      message: `Um novo contato se inscreveu para a news letter: ${values.email}`,
      subject: "Novo Contato News Letter",
    };

    await sendMail(data)
      .then((res) => {
        if (res.status === 200) {
          router.push("/confirmacao/newsletter");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box bgcolor="secondary.main">
      <Container sx={{ color: "#fff", py: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={6}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <SendIcon />
            <Typography
              fontWeight={500}
              sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
            >
              CADASTRE SEU E-MAIL E FIQUE POR DENTRO DAS NOVIDADES
            </Typography>
          </Stack>

          <Formik
            initialValues={{ name: "", phone: "", email: "" }}
            validate={validate}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
            }}
          >
            {(props) => (
              <Grid
                container
                component="form"
                noValidate
                onSubmit={props.handleSubmit}
                direction={{ xs: "column", sm: "row" }}
                alignItems="stretch"
                spacing={2}
                sx={{ width: "100%" }}
              >
                <Grid item xs={6}>
                  <Input name="name" type="text" placeholder="Seu nome..." />
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="phone"
                    type="phone"
                    placeholder="Seu telefone..."
                  />
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu e-mail..."
                  />
                </Grid>

                <Grid item xs={6}>
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    sx={{ width: "100%", height: "100%" }}
                    color="primary"
                  >
                    CADASTRAR
                  </LoadingButton>
                </Grid>
              </Grid>
            )}
          </Formik>
        </Stack>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={handleSnackbarClose}
        >
          Email cadastrado com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};
