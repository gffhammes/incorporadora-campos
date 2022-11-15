import { sendMail } from "../../../../services/sendMail";

export const sendContactMail = async (values: {
  message: string;
  name: string;
  email: string;
  phone: string;
}) => {
  const message = `
        <div>${values.message}</div>
        <br/>
        <br/>
        <br/>
        <ul>
          <li>Nome: ${values.name}</li>
          <li>Email: ${values.email}</li>
          <li>Telefone: ${values.phone}</li>
        </ul>
      `;

  const data = {
    email: values.email,
    subject: "Contato Campos",
    message,
  };

  return sendMail(data);
};

export const validateForm = (values) => {
  const errors: {
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  } = {};

  if (!values.name) errors.name = "Obrigatório";
  if (!values.phone) errors.phone = "Obrigatório";
  if (!values.message) errors.message = "Obrigatório";

  if (!values.email) {
    errors.email = "Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido";
  }

  return errors;
};
