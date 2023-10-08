import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import QuiltedImageList from './QuiltedImageList.jsx';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
        maxWidth="fixed"
        sx={{
          backgroundImage: `url("assets/img/fundo.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `300px 300px`
        }}
      >
        <QuiltedImageList/>
      </Container>
    </React.Fragment>
  );
}