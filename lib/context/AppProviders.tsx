import { CartProvider } from './CartProvider';
import ThemeProvider from './ThemeProvider';

type TAppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: TAppProvidersProps) {
  return (
    <ThemeProvider>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
