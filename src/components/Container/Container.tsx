import React from 'react';
import { Box } from '@mui/material';

function Container() {
  return (
      <Box
          sx={{
        width: '1744px',
        height: '582px',
        backgroundColor: '#ffffff', // White background color
        position: 'fixed',
        top: '422px',
        bottom: '0',
        left: '0',
        right: '0',
        mx: 'auto',
      }}
      >
          {/* Content of the container goes here */}
      </Box>
  );
}

export default Container;
