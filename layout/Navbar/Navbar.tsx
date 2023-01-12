import * as React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';
import { Menu, ShoppingCart } from '@mui/icons-material';
import Cart from '../../components/Cart';
import { useCartContext } from '../../lib/context/CartProvider';

interface Props {
  navLinks: { name: string; href: string }[];
}

const drawerWidth = 240;

export default function Navbar({ navLinks }: Props) {
  const [isMobileNavOpen, setisMobileNavOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setisMobileNavOpen(!isMobileNavOpen);
  };

  const { toggleCart, isCartOpen } = useCartContext();

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}>
      <Typography
        variant='h6'
        sx={{ my: 2 }}>
        Street Chick&apos;n
      </Typography>
      <Divider />
      <List>
        {navLinks.map(({ name, href }) => (
          <ListItem
            key={name}
            disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component='nav'
        sx={{
          backgroundColor: '#000'
        }}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Box
              sx={{
                maxWidth: '100px',
                ml: { xs: 'auto', sm: '1rem' },
                mr: '0',
                order: { sm: 10 }
              }}>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}>
                <Menu />
              </IconButton>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                title='Cart'
                edge='start'
                onClick={toggleCart}>
                <ShoppingCart
                  sx={{ width: { sm: '1.2rem' }, height: { sm: '1.2rem' } }}
                />
              </IconButton>
            </Box>
            <Typography
              variant='h1'
              component='div'
              sx={{
                flexGrow: 1,
                display: { sm: 'block' },
                fontSize: '1.05rem',
                order: -10
              }}>
              Street Chick&apos;n
            </Typography>
            {/* Navbar links for desktop */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navLinks.map(({ name }) => (
                <Button
                  key={name}
                  sx={{ color: '#fff', textTransform: 'capitalize' }}>
                  {name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Mobile navbar Drawer */}
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={isMobileNavOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          anchor='right'
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}>
          {drawer}
        </Drawer>
      </Box>
      {/* Cart Drawer */}
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={isCartOpen}
          onClose={toggleCart}
          ModalProps={{
            keepMounted: true
          }}
          anchor='right'
          sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '300px', sm: '350px' }
            }
          }}>
          {<Cart />}
        </Drawer>
      </Box>
    </Box>
  );
}
