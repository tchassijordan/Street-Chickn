import { Container, Box } from '@mui/material';
import Image from 'next/image';
import heroImage from '../../assets/landing_page/chicken-nuggets.jpg';
import { styled } from '@mui/material/styles';

const HeroImageBox = styled(Box)({
  width: '100vw',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh'
});

export default function Landing() {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      component='main'>
      <HeroImageBox component='div'>
        <Image
          src={heroImage}
          alt='Chicken nuggets preview '
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </HeroImageBox>
    </Container>
  );
}
