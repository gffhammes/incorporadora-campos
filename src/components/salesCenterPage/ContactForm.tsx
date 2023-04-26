import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "../commons/Button";
import { Input } from "../commons/Forms/Input";
import { Formik } from "formik";
import { sendMail } from "../../services/sendMail";
import { useRouter } from "next/router";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = (values) => {
    const errors: {
      name?: string;
      phone?: string;
    } = {};

    if (!values.name) errors.name = "Obrigatório";
    if (!values.phone) errors.phone = "Obrigatório";

    return errors;
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const data = {
      email: values.email,
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `,
      subject: 'Novo contato para "Ligamos pra você"',
    };
    await sendMail(data)
      .then((res) => {
        if (res.status === 200) {
          router.push("/confirmacao/contato");
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <Box sx={{ mb: 7 }}>
      <Container>
        <Box bgcolor="primary.main">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
            sx={{ color: "#fff", py: 3, px: { xs: 2, md: 7 } }}
          >
            <Typography
              fontWeight={500}
              fontSize={20}
              letterSpacing={2}
              sx={{ whiteSpace: { xs: "normal", md: "nowrap" } }}
            >
              LIGAMOS PRA VOCÊ
            </Typography>

            <Formik
              initialValues={{ name: "", phone: "" }}
              validate={validate}
              validateOnBlur={false}
              onSubmit={async (values, { resetForm }) => {
                await handleSubmit(values);
                resetForm();
              }}
            >
              {(props) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={props.handleSubmit}
                  sx={{ width: "100%" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Input name="name" placeholder="Nome completo" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Input name="phone" placeholder="Telefone" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <LoadingButton
                        type="submit"
                        loading={loading}
                        sx={{ height: "fit-content", width: { xs: "100%" } }}
                        color="secondary"
                      >
                        CADASTRAR
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Stack>
        </Box>
      </Container>
    </Box>
  );

  //  <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
  //         <Alert severity="success" variant="filled" onClose={handleSnackbarClose}>Email cadastrado com sucesso!</Alert>
  //       </Snackbar>
};
