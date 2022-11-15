import { Box, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LoadingButton } from "../../Button";
import { Input } from "../../Input";
import { sendContactMail, validateForm } from "./helpers";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    setLoading(true);

    await sendContactMail({
      message: values.message,
      email: values.name,
      name: values.email,
      phone: values.phone,
    })
      .then((res) => {
        if (res.status === 200) {
          router.push("/confirmacao/contato");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          sx={{ color: "secondary.main", mb: 4 }}
          fontSize={24}
          fontWeight={600}
          letterSpacing={2}
          textAlign="center"
        >
          Fale Conosco
        </Typography>

        <Box sx={sxFormWrapper}>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              message: "",
            }}
            validate={validateForm}
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
                      required
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Telefone"
                      required
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Input
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      required
                      color="grey"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      sx={{ height: "10rem" }}
                      multiline
                      id="message"
                      name="message"
                      placeholder="Mensagem"
                      required
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
    </Box>
  );
};

const sxFormWrapper = {
  position: "relative",
  width: "100%",
};
