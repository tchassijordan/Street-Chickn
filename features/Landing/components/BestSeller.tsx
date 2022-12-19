import { Box, Button, Typography } from '@mui/material';
import * as colors from '@mui/material/colors';

export default function BestSellers() {
  return (
    <Box component='section'>
      <Typography
        component='h1'
        sx={{
          fontSize: '3.5rem',
          lineHeight: '1em',
          fontWeight: '700',
          mb: '0.5em'
        }}>
        Best Seller
      </Typography>
      <Box component='article'>
        <Typography
          component='h2'
          sx={{
            fontSize: '1.65rem',
            fontWeight: '600',
            color: colors.grey[800],
            mb: '0.5em'
          }}>
          Chicken Nuggets
        </Typography>
        <Typography
          component='p'
          sx={{
            fontSize: '1rem',
            color: colors.grey[600]
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quia, voluptas quae voluptatem quibusdam quos
          accusantium voluptates quas quidem. Quisquam, quae. Quisquam, quae.
        </Typography>
        <Button
          variant='contained'
          sx={{
            borderRadius: '5em',
            backgroundColor: 'white',
            color: 'black',
            mt: '1.5em'
          }}>
          Order now
        </Button>
      </Box>
    </Box>
  );
}
