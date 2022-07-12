import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ContactForm from './ContactForm';

const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  enterpriseName: string;
}

const Root = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 2,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export const SwipeableEdgeDrawer = ({ enterpriseName, window }: Props) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(90% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />  
      <SwipeableDrawer
        // container={container}
        anchor="bottom"
        open={true}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        // disableSwipeToOpen={false}
        disableDiscovery
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography textAlign='center' sx={{ p: 2 }}>TEM INTERESSE NO EMPREENDIMENTO?</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            p: 2,
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'secondary.main',
          }}
        >
          <ContactForm enterpriseName={enterpriseName} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
