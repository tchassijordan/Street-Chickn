import { Navbar } from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

type TLayoutProps = {
  children: React.ReactElement;
};

export default function MainLayout({ children }: TLayoutProps) {
  const navBarLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' }
  ];

  const cartData = [
    {
      name: 'Chicken Nuggets',
      price: 5000,
      currency: 'XAF',
      quantity: 1,
      imgUrl: ''
    },
    {
      name: 'Chicken Nuggets',
      price: 5000,
      currency: 'XAF',
      quantity: 1,
      imgUrl: ''
    },
    {
      name: 'Chicken Nuggets',
      price: 5000,
      currency: 'XAF',
      quantity: 1,
      imgUrl: ''
    },
    {
      name: 'Chocolate Cake',
      price: 5000,
      currency: 'XAF',
      quantity: 1,
      imgUrl: ''
    }
  ];

  return (
    <div>
      <Navbar
        navLinks={navBarLinks}
        cartData={cartData}
      />
      <Box component='main'>{children}</Box>
      <Footer />
    </div>
  );
}
