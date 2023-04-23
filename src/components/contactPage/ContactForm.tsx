import { Alert, Box, Container, Grid, Snackbar } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { sendMail } from "../../services/sendMail";
import { LoadingButton } from "../commons/Button";
import { Input } from "../commons/Forms/Input";

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
  py: "4rem",
};

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const validate = (values) => {
    const errors: {
      name?: string;
      phone?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};

    if (!values.name) errors.name = "Obrigatório";
    if (!values.phone) errors.phone = "Obrigatório";
    if (!values.subject) errors.subject = "Obrigatório";
    if (!values.message) errors.message = "Obrigatório";

    if (!values.email) {
      errors.email = "Obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido";
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    const data = {
      email: values.email,
      subject: values.subject,
      message: `
        <div>${values.message}</div>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `,
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
    <Box>
      <Container maxWidth="md">
        <Box sx={sxFormWrapper}>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              subject: "",
              message: "",
            }}
            validate={validate}
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
                sx={{ px: 2, mx: "auto", maxWidth: "sm" }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nome Completo"
                      required={true}
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Telefone"
                      required={true}
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      required={true}
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto"
                      required={true}
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      sx={{ height: "10rem" }}
                      multiline={true}
                      id="message"
                      name="message"
                      placeholder="Mensagem"
                      required={true}
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ display: "flex" }}>
                    <LoadingButton
                      loading={loading}
                      type="submit"
                      color="secondary"
                      sx={{ mx: "auto" }}
                    >
                      ENVIAR
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
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
          Mensagem enviada com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};
