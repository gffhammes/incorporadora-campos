import { Box, Container, Grid } from "@mui/material";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { sendMail } from "../../services/sendMail";
import { LoadingButton } from "../commons/Button";
import { Input } from "../commons/Input";
import { SectionTitle } from "../commons/SectionTitle";

interface IFormValues {
  name: string;
  companyName: string;
  companyAddress: string;
  phone: string;
  email: string;
  product: string;
}

export const SupplierForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const validate = (values) => {
    const errors: {
      name?: string;
      companyName?: string;
      companyAddress?: string;
      phone?: string;
      email?: string;
      product?: string;
    } = {};

    if (!values.name) errors.name = "Obrigatório";
    if (!values.companyName) errors.companyName = "Obrigatório";
    if (!values.companyAddress) errors.companyAddress = "Obrigatório";
    if (!values.phone) errors.phone = "Obrigatório";
    if (!values.email) errors.email = "Obrigatório";
    if (!values.product) errors.product = "Obrigatório";

    if (!values.email) {
      errors.email = "Obrigatório";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido";
    }

    return errors;
  };

  const handleSubmit = async (values: IFormValues) => {
    setLoading(true);
    const data = {
      email: values.email,
      subject: 'Novo contato para "Seja um fornecedor"',
      message: `
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Nome da empresa: ${values.companyName}</li>
          <li>Endereço da empresa: ${values.companyAddress}</li>
          <li>Telefone: ${values.phone}</li>
          <li>Email: ${values.email}</li>
          <li>Com que produto você trabalha? ${values.product}</li>
        </ul>
      `,
    };
    await sendMail(data)
      .then((res) => {
        if (res.status === 200) {
          router.push("/confirmacao/fornecedor");
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <Box bgcolor="#E4E2E7">
      <Container sx={{ py: 7 }}>
        <SectionTitle>SEJA UM FORNECEDOR</SectionTitle>
        <Formik
          initialValues={{
            name: "",
            companyName: "",
            companyAddress: "",
            phone: "",
            email: "",
            product: "",
          }}
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
              sx={{ px: 2, mx: "auto", maxWidth: "md" }}
            >
              <Grid container spacing={2} alignItems="flex-start">
                <Grid item xs={12} sm={6}>
                  <Input
                    name="name"
                    color="white-contained"
                    placeholder="Nome Completo"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    name="companyName"
                    color="white-contained"
                    placeholder="Nome da Empresa"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Input
                    name="companyAddress"
                    color="white-contained"
                    placeholder="Endereço da Empresa"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Input
                    name="phone"
                    color="white-contained"
                    placeholder="Telefone"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Input
                    name="email"
                    color="white-contained"
                    placeholder="Email"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    sx={{ height: "10rem" }}
                    multiline={true}
                    name="product"
                    color="white-contained"
                    placeholder="Com que produto você trabalha?"
                    required={true}
                  />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <LoadingButton
                    loading={loading}
                    type="submit"
                    color="primary"
                    sx={{ mx: "auto" }}
                  >
                    ENVIAR
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>
          )}
        </Formik>
      </Container>
    </Box>
  );
};
