import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Carousel } from "../../commons/Carousel/Carousel";

const partners = [
  {
    src: "/images/parceiros/bolshoi.png",
    alt: "Bolshoi",
  },
  {
    src: "/images/parceiros/millebier.png",
    alt: "Mille Bier",
  },
  {
    src: "/images/parceiros/zico.png",
    alt: "Zico",
  },
];

export const Partners = () => {
  const { sm } = useBreakpoint();

  const slides = partners.map((partner) => (
    <Box sx={imageStyle} key={partner.alt}>
      <Image
        src={partner.src}
        layout="fill"
        alt={partner.alt}
        objectFit="contain"
      />
    </Box>
  ));

  return sm ? (
    <Stack
      direction="row"
      spacing={8}
      alignItems="center"
      sx={{ width: "100%" }}
    >
      {slides}
    </Stack>
  ) : (
    <Box sx={{ width: "100%" }}>
      <Carousel
        slides={slides}
        slideFlex="0 0 100%"
        spacing={4}
        options={{
          align: "center",
        }}
        dotsColor="secondary"
        showDots
      />
    </Box>
  );
};

const imageStyle = {
  position: "relative",
  width: "100%",
  height: { xs: "8em", sm: "10rem" },
};
