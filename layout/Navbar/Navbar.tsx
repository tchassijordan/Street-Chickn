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
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  navLinks: { name: string; href: string }[];
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
  const { navLinks } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 8, display: { sm: 'none' }, left: '100%' }}>
            <MenuIcon />
          </IconButton>
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
    </Box>
  );
}
