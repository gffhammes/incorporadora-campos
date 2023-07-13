import { Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, forwardRef, useImperativeHandle } from "react";

export interface IEnterpriseCardDataButtonRef {
  handleHoverEnter: () => void;
  handleHoverExit: () => void;
}

export const EnterpriseCardDataButton =
  forwardRef<IEnterpriseCardDataButtonRef>((props, ref) => {
    const [hover, setHover] = useState(false);

    const handleHoverEnter = () => setHover(true);
    const handleHoverExit = () => setHover(false);

    useImperativeHandle(
      ref,
      () => ({
        handleHoverEnter,
        handleHoverExit,
      }),
      []
    );

    return (
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          animation: hover ? `myEffect 1500ms` : undefined,

          "@keyframes myEffect": {
            "0%": {
              transform: "translateX(0%)",
            },

            "50%": {
              transform: "translateX(2%)",
            },

            "100%": {
              transform: "translateX(-0%)",
            },
          },
        }}
      >
        <Typography color="secondary">SAIBA MAIS</Typography>

        <Stack
          justifyContent="center"
          sx={{
            fontSize: 12,
            height: "100%",
          }}
        >
          <ArrowForwardIosIcon fontSize="inherit" color="secondary" />
        </Stack>
      </Stack>
    );
  });
