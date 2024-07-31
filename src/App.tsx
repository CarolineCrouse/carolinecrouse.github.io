import './App.css';

import { Copyright } from '@mui/icons-material';
import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeOptions,
  ThemeProvider,
  Typography,
} from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: 'rgba(57,50,115,0.96)'
      ,
    },
    secondary: {
      main: '#a499d4',
    },
    text: {
      primary: '#1a101d',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
};

const theme = createTheme(themeOptions);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <title>caroline.dev</title>
      <main>
        <Container
          className="container fadeAndSlideIn"
        >
          <Grid container spacing={2}>
            <Grid item xs className="gridItem1">
              <Typography
                variant="h2"
                className="headerText rainbowTextHover"
              >
                caroline.dev
              </Typography>
              <Typography color="text.secondary" paragraph>
                one day i will think of something to put here but for now here is nyan cat
              </Typography>
            </Grid>
            <Grid item xs className="gridItem2">
              <img
                src="/images/nyangif.gif"
                alt="nyancat"
                className="nyan"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Box component="footer" className="footer">
        <Copyright />
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
        >
          2024 Caroline Crouse
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
