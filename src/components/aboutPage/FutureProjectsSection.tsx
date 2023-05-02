import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Carousel } from "../commons/Carousel/Carousel";
import { SectionTitle } from "../commons/SectionTitle";

const futureProjects = [
  {
    image: "/images/BOLSHOI.png",
    name: "Bolshoi",
  },
  {
    image: "/images/DI-SPAGNA.png",
    name: "Di Spagna",
  },
  {
    image: "/images/SAN-MARCO-ITAJUBA.png",
    name: "San Marco",
  },
];

const slides = futureProjects.map((project) => (
  <Box
    key={project.name}
    sx={{
      position: "relative",
      height: { xs: "12rem", sm: "12rem", md: "14rem" },
      width: "100%",
    }}
  >
    <Image
      src={project.image}
      alt={project.name}
      layout="fill"
      objectFit="contain"
    />
  </Box>
));

const FutureProjectsSection = () => {
  const { sm } = useBreakpoint();

  return (
    <Box bgcolor="primary.main" sx={{ py: 10 }}>
      <Container>
        <SectionTitle theme="light">PROJETOS FUTUROS</SectionTitle>
      </Container>

      {sm ? (
        <Container>
          <Stack direction="row" spacing={2}>
            {slides}
          </Stack>
        </Container>
      ) : (
        <Carousel
          slides={slides}
          slideFlex={{ xs: "0 0 60%", sm: "0 0 33%" }}
          spacing={4}
          options={{
            skipSnaps: true,
            align: "center",
          }}
          showDots
        />
      )}
    </Box>
  );
};

export default FutureProjectsSection;
