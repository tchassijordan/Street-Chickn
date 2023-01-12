import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Typography
} from '@mui/material';
import { Add, LayersClearOutlined, Remove, Close } from '@mui/icons-material';
import Image from 'next/image';
import defaultChickenNuggetsImg from '../assets/landing_page/chicken-nuggets.jpg';
import { grey, red } from '@mui/material/colors';
import { useCartContext } from '../lib/context/CartProvider';

export default function Cart() {
  const {
    data,
    clearCart,
    addItemToCart,
    currency,
    deleteItemFromCart,
    toggleCart,
    reduceItemQty
  } = useCartContext();

  return (
    <Box
      sx={{
        px: '1em',
        height: 'calc(100vh-3em)'
      }}>
      <Close
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem' },
          cursor: 'pointer',
          marginTop: '1em',
          color: grey[600]
        }}
        onClick={toggleCart}
      />
      <Typography
        variant='h1'
        sx={{
          textTransform: 'capitalize',
          fontSize: { xs: '1.1rem', sm: '1.25rem' },
          fontWeight: 700,
          color: grey[800],
          mt: '1em',
          mb: '1.15em'
        }}>
        Review your shopping cart
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}>
        <Box>
          {data.map(({ id, name, price, quantity, image: image }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                mx: 'auto',
                mb: '1.25em',
                alignItems: 'flex-start'
              }}>
              <ListItemAvatar
                sx={{
                  width: '35%',
                  height: '5.5em',
                  mr: '1.15em'
                }}>
                <Image
                  src={image || defaultChickenNuggetsImg}
                  alt={name}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.5em'
                  }}
                />
              </ListItemAvatar>
              <Box
                sx={{
                  borderBottom: `1px solid ${grey[400]}`,
                  width: '60%',
                  pb: '0.1em'
                }}>
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: grey[800]
                  }}
                />
                <ListItemText
                  primary={`${price} ${currency}`}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    color: grey[700]
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      maxWidth: '60%',
                      fontSize: '0.9rem'
                    }}>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>
                      <Remove
                        sx={{ fontSize: '1.25em' }}
                        onClick={() => reduceItemQty(id)}
                      />{' '}
                    </ListItemIcon>
                    <div>
                      <ListItemText
                        primary={quantity}
                        primaryTypographyProps={{
                          fontSize: '0.9rem',
                          color: grey[900]
                        }}
                        sx={{}}
                      />
                    </div>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>
                      <Add
                        sx={{ fontSize: '1.25em' }}
                        onClick={() =>
                          addItemToCart({
                            id,
                            name,
                            price,
                            quantity,
                            image
                          })
                        }
                      />{' '}
                    </ListItemIcon>
                  </Box>
                  <ListItemIcon
                    sx={{
                      width: '20%',
                      minWidth: 'unset'
                    }}>
                    <LayersClearOutlined
                      sx={{ fontSize: '1.05em' }}
                      onClick={() => deleteItemFromCart(id)}
                    />{' '}
                  </ListItemIcon>
                </Box>
              </Box>
            </ListItem>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant='h3'
            sx={{
              textTransform: 'capitalize',
              fontSize: { xs: '1rem', sm: '1.15rem' },
              fontWeight: 700,
              color: grey[800],
              width: '35%',
              mr: '1.15em'
            }}>
            Sub Total
          </Typography>
          <ListItemText
            primary={`0000.0 ${currency}`}
            primaryTypographyProps={{
              fontSize: '0.95rem',
              color: grey[700],
              width: '60%',
              my: '0'
            }}
          />
        </Box>
        <Box component='div'>
          <ListItemButton
            sx={{
              borderRadius: '0.5em',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'capitalize',
              letterSpacing: '0.025em',
              backgroundColor: grey[800],
              color: grey[50],
              width: '100%',
              py: '1.5em',
              px: '1.5em',
              textAlign: 'center',
              '&:hover': {
                backgroundColor: grey[800],
                color: grey[50]
              }
            }}>
            <Box
              component='span'
              sx={{ mx: 'auto' }}>
              Order now
            </Box>
          </ListItemButton>
        </Box>
      </List>
    </Box>
  );
}
