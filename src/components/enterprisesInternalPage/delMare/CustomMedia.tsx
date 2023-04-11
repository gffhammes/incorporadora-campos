import { Box, Container } from "@mui/material";
import { useFetch } from "../../../hooks/useFetch";
import Image from "next/image";

const CustomMedia = () => {
  const { data, isFetching } = useFetch<any>(
    "/api/empreendimentos?filters[Slug][$eq]=piazza-del-mare&populate[0]=FotoVideo"
  );

  if (isFetching) return null;

  const imgUrl = data.data[0].attributes.FotoVideo.data.attributes.url;

  return (
    <Box>
      <Container
        sx={{
          pb: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            pb: "56.25%",
          }}
        >
          <Image src={imgUrl} alt="" layout="fill" priority />
          {/* <iframe
            src="https://drive.google.com/file/d/167arXJ15hti0jtw9EwGzrmPQasWLAypw/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomMedia;
