import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { IStrapiEnterpriseAddress } from "../../interfaces/strapi";

interface IMapsSection {
  address: IStrapiEnterpriseAddress;
}

export const MapsSection = ({ address }: IMapsSection) => {
  const { Rua, Numero, Bairro, Cidade, UF } = address;

  console.log(Numero);

  const getFullAddress = () => {
    if (Rua === " " && Numero === " ") {
      return `${Bairro}, ${Cidade}/${UF}`;
    }

    if (!Bairro) {
      return `${Rua}, ${Numero}, ${Cidade}/${UF}`;
    }

    return `${Rua}, ${Numero} - ${Bairro}, ${Cidade}/${UF}`;
  };

  const fullAddress = getFullAddress();

  const addressToUse = encodeURI(fullAddress);

  return (
    <Box id="localization">
      <Box>
        <Container sx={{ py: 3 }}>
          <Typography
            fontSize={20}
            letterSpacing={1}
            textAlign="center"
            sx={{ width: "fit-content", mx: "auto" }}
          >
            {fullAddress}
          </Typography>
        </Container>
      </Box>
      <iframe
        src={`https://maps.google.com/maps?q=${addressToUse}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
