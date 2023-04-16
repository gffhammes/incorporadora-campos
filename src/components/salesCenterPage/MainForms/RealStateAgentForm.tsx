import { Box, Grid } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { sendMail } from "../../../services/sendMail";
import { LoadingButton } from "../../commons/Button";
import { Input } from "../../commons/Input";
import FormTemplate from "./FormTemplate";

const RealStateAgentForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = (values) => {
    const errors: {
      name?: string;
      phone?: string;
      email?: string;
      city?: string;
      message?: string;
    } = {};

    if (!values.name) errors.name = "Obrigatório";
    if (!values.city) errors.city = "Obrigatório";
    if (!values.phone) errors.phone = "Obrigatório";
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
      subject: 'Novo contato para "Falar com corretor"',
      message: `
        <div>${values.message}</div>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
          <li>Cidade/Estado: ${values.city}</li>
        </ul>
      `,
    };
    await sendMail(data)
      .then((res) => {
        if (res.status === 200) {
          router.push("/confirmacao/corretor");
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <FormTemplate title="FALE COM UM CORRETOR">
      <Formik
        initialValues={{
          name: "",
          city: "",
          phone: "",
          email: "",
          message: "",
        }}
        validate={validate}
        validateOnBlur={false}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        {(props) => (
          <Box component="form" noValidate onSubmit={props.handleSubmit}>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item xs={12}>
                <Input
                  name="name"
                  placeholder="Nome Completo"
                  required={true}
                  color="grey"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="city"
                  placeholder="Cidade/Estado"
                  required={true}
                  color="grey"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="phone"
                  placeholder="Telefone"
                  required={true}
                  color="grey"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name="email"
                  placeholder="Email"
                  required={true}
                  color="grey"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  sx={{ height: "10rem" }}
                  multiline={true}
                  rows={7}
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
    </FormTemplate>
  );
};

export default RealStateAgentForm;
