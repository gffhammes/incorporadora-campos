import { Box, Container, Stack } from "@mui/material";
import { EnterpriseCard } from "./EnterpriseCard/EnterpriseCard";
import { NotFound } from "./NotFound";
import { IStrapiEnterprise } from "../../interfaces/strapi";

interface IEnterprisesSectionProps {
  enterprises: IStrapiEnterprise[];
}

export const EnterprisesSection = ({
  enterprises,
}: IEnterprisesSectionProps) => {
  return (
    <Box id="enterprises" bgcolor={"#efefef"}>
      <Container sx={{ py: 10, maxWidth: "860px" }} maxWidth={false}>
        {enterprises.length > 0 && (
          <Stack spacing={10}>
            {enterprises.map((enterprise) => (
              <EnterpriseCard
                key={enterprise.id}
                enterprise={enterprise.attributes}
              />
            ))}
          </Stack>
        )}
        {enterprises.length === 0 && <NotFound />}
      </Container>
    </Box>
  );
};
