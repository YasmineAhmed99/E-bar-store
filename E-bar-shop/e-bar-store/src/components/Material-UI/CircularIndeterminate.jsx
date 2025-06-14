
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }} className="flex flex-col items-center justify-center h-screen">
      <CircularProgress />
    </Box>
  );
}