import { Navbar } from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useCartContext } from '../lib/context/CartProvider';

type TLayoutProps = {
  children: React.ReactElement;
};

export default function MainLayout({ children }: TLayoutProps) {
  const navBarLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' }
  ];

  //For testing cart handlers
  const cartData = useMemo(
    () => [
      {
        name: 'Chicken Nuggets',
        price: 5000,
        currency: 'XAF',
        quantity: 1,
        image: '',
        id: '1'
      },
      {
        name: 'Chicken Nuggets',
        price: 5000,
        currency: 'XAF',
        quantity: 1,
        image: '',
        id: '2'
      },
      {
        name: 'Chicken Nuggets',
        price: 5000,
        currency: 'XAF',
        quantity: 1,
        image: '',
        id: '3'
      },
      {
        name: 'Chocolate Cake',
        price: 5000,
        currency: 'XAF',
        quantity: 1,
        image: '',
        id: '4'
      }
    ],
    []
  );

  const { addItemToCart } = useCartContext();

  // For testing the cart handlers
  useEffect(() => {
    cartData.map((data) => addItemToCart(data));
    //es-lint exclusive hooks
  }, []);

  return (
    <div>
      <Navbar navLinks={navBarLinks} />
      <Box component='main'>{children}</Box>
      <Footer />
    </div>
  );
}
