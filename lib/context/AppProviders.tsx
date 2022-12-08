import { createTheme, ThemeProvider } from '@mui/material/styles';

type TAppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: TAppProvidersProps) {
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

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
