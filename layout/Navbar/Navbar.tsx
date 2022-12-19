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
  Button
} from '@mui/material';
import { Menu, ShoppingCart } from '@mui/icons-material';
import Cart, { TCartProps } from '../../components/Cart';

interface Props {
  navLinks: { name: string; href: string }[];
  cartData?: TCartProps['data'];
}

const drawerWidth = 240;

export default function Navbar({ navLinks, cartData }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

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
        <Toolbar>
          <Box sx={{ maxWidth: '100px', ml: 'auto', mr: '0' }}>
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
              edge='start'
              onClick={handleCartToggle}
              sx={{ display: { sm: 'none' } }}>
              <ShoppingCart />
            </IconButton>
          </Box>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Street Chick&apos;n
          </Typography>
          {/* Navbar links for desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map(({ name }) => (
              <Button
                key={name}
                sx={{ color: '#fff' }}>
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile navbar Drawer */}
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
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
      {/* Mobile Cart Drawer */}
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={cartOpen}
          onClose={handleCartToggle}
          ModalProps={{
            keepMounted: true
          }}
          anchor='right'
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '300px'
            }
          }}>
          {
            <Cart
              data={cartData ?? []}
              handleCartToggle={handleCartToggle}
            />
          }
        </Drawer>
      </Box>
    </Box>
  );
}
