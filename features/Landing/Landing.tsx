import { Container, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BestSellers from './components/BestSeller';
import LandingHero from './components/LandingHero';

const HeroImageBox = styled(Box)({
  width: '100vw',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh'
});

const MenuBtn = styled(Button)({
  borderRadius: '5em',
  fontSize: '0.75rem'
});

export default function Landing() {
  return (
    <Container maxWidth='lg'>
      <LandingHero />
      <BestSellers />
    </Container>
  );
}
