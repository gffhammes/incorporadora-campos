export default async function handler(req, res) {
  require("dotenv").config();

  const email = "contatos.sites@hotmail.com";

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Hotmail",
    secureConnection: false,
    auth: {
      user: email,
      pass: process.env.password,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
  const mailData = {
    from: email,
    to: process.env.recipient_mail,
    subject: "[Site Campos Incorporadora] " + req.body.subject,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.json(error);
    res.status(405).end();
  }
}
