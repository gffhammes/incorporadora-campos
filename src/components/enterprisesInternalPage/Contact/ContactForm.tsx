import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { LoadingButton } from "../../commons/Button";
import { Input } from "../../commons/Forms/Input";
import { Formik } from "formik";
import { sendMail } from "../../../services/sendMail";

interface IContactData {
  name: string;
  phone: string;
  email: string;
}

interface Props {
  enterpriseName: string;
  open: boolean;
}

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

const ContactForm = ({ enterpriseName, open }: Props) => {
  const [loading, setLoading] = useState(false);

  const validate = (values: IContactData) => {
    const errors: { name?: string; phone?: string; email?: string } = {};

    if (!values.name) errors.name = "Obrigatório";

    if (!values.phone) errors.phone = "Obrigatório";

    if (!values.email) {
      errors.email = "Obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido";
    }

    return errors;
  };

  const handleSubmit = async (values: IContactData) => {
    setLoading(true);
    const data = {
      email: values.email,
      subject: `Contato para o empreendimento ${enterpriseName}`,
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `,
    };
    await sendMail(data)
      .then(() => {
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const sxFormWrapper = useMemo(
    () => ({
      position: "fixed",
      zIndex: 999,
      left: "1rem",
      transition: "opacity .5s, all 1s",
      backgroundColor: "secondary.main",
      p: 2,
      width: "calc(100% - 2rem)",
      maxWidth: "25rem",
      borderRadius: "1rem",
      color: "white",
      bottom: open ? "6rem" : "-100%",
      opacity: open ? 1 : 0,
    }),
    [open]
  );

  return (
    <Paper elevation={24} sx={sxFormWrapper}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12}>
                <Typography>
                  Por favor, preencha o formulário abaixo e retornaremos seu
                  contato assim que possível.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nome Completo"
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ height: "100%" }}>
                  <LoadingButton
                    loading={loading}
                    sx={{ width: "100%", height: "100%" }}
                    type="submit"
                    color="primary"
                  >
                    ENVIAR
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default ContactForm;
