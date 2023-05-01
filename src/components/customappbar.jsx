import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

function CustomAppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h1" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: 24 }}>
          PageCraft
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

export default CustomAppBar;