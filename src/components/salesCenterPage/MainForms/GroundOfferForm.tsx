import { Box, Grid } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { sendMail } from "../../../services/sendMail";
import { LoadingButton } from "../../commons/Button";
import CheckBox from "../../commons/Forms/CheckBox";
import { Input } from "../../commons/Forms/Input";
import FormTemplate from "./FormTemplate";

const GroundOfferForm = () => {
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors: {
      name?: string;
      email?: string;
      phone?: string;
      groundAddress?: string;
      groundFrontSize?: string;
      groundBackSize?: string;
      message?: string;
    } = {};

    if (!values.name) errors.name = "Obrigatório";
    if (!values.email) errors.email = "Obrigatório";
    if (!values.phone) errors.phone = "Obrigatório";
    if (!values.groundAddress) errors.groundAddress = "Obrigatório";
    if (!values.groundFrontSize) errors.groundFrontSize = "Obrigatório";
    if (!values.groundBackSize) errors.groundBackSize = "Obrigatório";
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
      subject: 'Novo contato para "Ofereça um terreno"',
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
          <li>Endereço do terreno: ${values.groundAddress}</li>
          <li>Metragem Frente: ${values.groundFrontSize}</li>
          <li>Metragem Fundos: ${values.groundBackSize}</li>
          <li>É terreno de esquina? ${
            values.isCornerGround ? "Sim" : "Não"
          }</li>
          <li>É rua asfaltada/calçada? ${
            values.isAsphaltedStreet ? "Sim" : "Não"
          }</li>
          <br/>
          <br/>
          <li>Mensagem: ${values.message}</li>
        </ul>
      `,
    };
    await sendMail(data)
      .then((res) => {
        if (res.status === 200) {
          window.open("/confirmacao/terreno", "_self");
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <FormTemplate bgcolor="grey" title="OFEREÇA UM TERRENO">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          groundAddress: "",
          groundFrontSize: "",
          groundBackSize: "",
          isCornerGround: false,
          isAsphaltedStreet: false,
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
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="email"
                  placeholder="E-mail"
                  required={true}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="phone"
                  placeholder="Telefone"
                  required={true}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name="groundAddress"
                  placeholder="Endereço Completo do Terreno"
                  required={true}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="groundFrontSize"
                  placeholder="Metragem Frente"
                  required={true}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <Input
                  name="groundBackSize"
                  placeholder="Metragem Fundos"
                  required={true}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <CheckBox name="isCornerGround" label="Terreno de Esquina" />
              </Grid>
              <Grid item xs={12} sm={6} md={12} lg={6}>
                <CheckBox
                  name="isAsphaltedStreet"
                  label="Rua Asfaltada/Calçada"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  sx={{ height: "10rem" }}
                  multiline={true}
                  rows={2}
                  name="message"
                  placeholder="Mensagem"
                  required={true}
                  color="secondary"
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

export default GroundOfferForm;
