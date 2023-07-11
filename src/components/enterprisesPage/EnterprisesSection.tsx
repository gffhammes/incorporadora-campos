import { Box, Container, Grid } from "@mui/material";
import { EnterpriseCard } from "./EnterpriseCard/EnterpriseCard";
import { NotFound } from "./NotFound";

export const EnterprisesSection = ({ enterprises }) => {
  return (
    <Box id="enterprises">
      <Container sx={{ py: 10, maxWidth: "1100px" }} maxWidth={false}>
        {enterprises.length > 0 && (
          <Grid container spacing={10}>
            {enterprises.map((enterprise, index) => (
              <Grid item key={index} xs={12}>
                <EnterpriseCard enterprise={enterprise.attributes} />
              </Grid>
            ))}
          </Grid>
        )}
        {enterprises.length === 0 && <NotFound />}
      </Container>
    </Box>
  );
};
