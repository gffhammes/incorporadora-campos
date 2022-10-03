import { Box, Container } from "@mui/material";
import React from "react";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

type Props = {};

const VideoZico = (props: Props) => {
  const { md } = useBreakpoint();
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
            width: { xs: "100%", md: "60%" },
            pb: { xs: "56.25%", md: "33.75%" },
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
