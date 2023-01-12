import { Container, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import heroImage from '../../assets/landing_page/chicken-nuggets.jpg';
import { styled } from '@mui/material/styles';

const HeroImageBox = styled(Box)({
  width: '100vw',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh'
});

const MenuBtn = styled(Button)({
  borderRadius: '5em',
  fontSize: '0.75rem',
  backgroundColor: 'white',
  color: 'black'
});

export default function LandingHero() {
  return (
    <Box
      component='section'
      sx={{
        width: '90%',
        maxWidth: '100%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <div>
        <Typography
          component='h1'
          sx={{
            fontSize: '3.5rem',
            lineHeight: '1em',
            fontWeight: '700'
          }}>
          Street Chick&apos;n
        </Typography>
        <Typography
          component='p'
          sx={{
            marginTop: '1em',
            color: 'gray'
          }}>
          is a safe habour to find the best breaded chicken at low prices and in
          no time.
        </Typography>
        <Box
          sx={{
            marginTop: '1.75em'
          }}>
          <MenuBtn
            variant='contained'
            sx={{
              marginRight: '1em'
            }}>
            Order now
          </MenuBtn>
          <MenuBtn variant='contained'>View Menu</MenuBtn>
        </Box>
      </div>
      {/* <HeroImageBox component='div'>
        <Image
          src={heroImage}
          alt='Chicken nuggets preview '
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </HeroImageBox> */}
    </Box>
  );
}
