import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  makeStyles,
  Typography
} from '@mui/material';
import {
  AddCircleOutline,
  DeleteForeverOutlined,
  RemoveCircleOutline,
  CancelOutlined
} from '@mui/icons-material';
import Image from 'next/image';
import chickenNuggetsImg from '../assets/landing_page/chicken-nuggets.jpg';
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
      <Box
        component='div'
        height='3em'
        color={grey[600]}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          gap: '0.25em'
        }}
        onClick={toggleCart}>
        <CancelOutlined
          sx={{
            fontSize: '0.8rem'
          }}
        />{' '}
        <Typography
          component='p'
          sx={{
            fontSize: '0.9rem'
          }}>
          Close
        </Typography>
      </Box>
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
                  width: '40%',
                  height: '5.5em',
                  mr: '1.15em'
                }}>
                <Image
                  src={image || chickenNuggetsImg}
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
              <Box sx={{ mt: '0' }}>
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
                    fontSize: '0.85rem',
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
                      maxWidth: '70%'
                    }}>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>
                      <RemoveCircleOutline onClick={() => reduceItemQty(id)} />{' '}
                    </ListItemIcon>
                    <div>
                      <ListItemText
                        primary={quantity}
                        primaryTypographyProps={{
                          fontSize: '1rem',
                          color: grey[900]
                        }}
                        sx={{}}
                      />
                    </div>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>
                      <AddCircleOutline
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
                    <DeleteForeverOutlined
                      sx={{ fontSize: '1.35rem' }}
                      onClick={() => deleteItemFromCart(id)}
                    />{' '}
                  </ListItemIcon>
                </Box>
              </Box>
            </ListItem>
          ))}
        </Box>
        <Box component='div'>
          <ListItemButton
            sx={{
              borderRadius: '5em',
              fontSize: '0.75rem',
              backgroundColor: 'white',
              color: 'black',
              border: '2px solid rgba(156, 163, 175, 0.5)',
              width: 'fit-content',
              maxHeight: '35px'
            }}>
            Order now
          </ListItemButton>
        </Box>
      </List>
    </Box>
  );
}
