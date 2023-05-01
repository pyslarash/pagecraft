import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import CustomAppBar from './components/customappbar.jsx';
import Settings from './components/settings.jsx';
import Process from './components/process.jsx';

function App() {
  return (
    <div sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} md={2}>
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
              Settings
            </Typography>
            <Settings />
          </Paper>
        </Grid>
        <Grid item xs={12} md={10}>
          <Paper elevation={1} sx={{ padding: 2 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
              Process
            </Typography>
            <Process />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
