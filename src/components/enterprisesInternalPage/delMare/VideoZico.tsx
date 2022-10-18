import { Box, Container } from "@mui/material";

type Props = {};

const VideoZico = (props: Props) => {
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
          <iframe
            src="https://drive.google.com/file/d/1s_3CCJpqLRcPIpLUS0vE58r7wshXGCxE/preview"
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
          />
        </Box>
      </Container>
    </Box>
  );
};

export default VideoZico;
