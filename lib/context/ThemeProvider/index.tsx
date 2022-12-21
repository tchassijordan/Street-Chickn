import {
  createTheme,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';

export default function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#c1272d'
      },
      secondary: {
        main: '#fbb03b'
      }
    }
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
