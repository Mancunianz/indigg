import Wrapper from '@cc/wrapper';
import { Box, Button, Stack, SxProps, Theme, Typography } from '@mui/material';

const LeadGeneration = () => {
  return (
    <Wrapper
      py={19.5}
      textAlign={'center'}
      width={{ xs: '100%', sm: 'fit-content' }}
      sectionProps={{
        sx: {
          background: (theme) => theme.palette.common.black,
        },
      }}
    >
      <Stack sx={bgGradiantAnimationSx}>
        <Typography
          variant="h2"
          fontWeight={500}
          lineHeight={'200%'}
          sx={{
            textShadow: (theme) => `0px 4px 4px ${theme.palette.common.black}`,
          }}
        >
          Join the web3 gaming revolution today!
        </Typography>
        <Typography
          variant={'body1'}
          fontWeight={400}
          mb={3.75}
          color={'text.secondary'}
          sx={{
            textShadow: (theme) => `0px 2px 2px ${theme.palette.common.black}`,
          }}
        >
          Discover new games, buy and sell NFTs, and connect with other gamers
          <br />
          on our decentralized gaming marketplace.
        </Typography>
        <Button variant={'contained'} sx={{ px: { xs: 4, sm: 8 } }}>
          Sign up now to start gaming
          <Box component={'span'}  display={{xs:'none',sm:'unset'}} ml={0.7}>in the future!</Box>
        </Button>
      </Stack>
    </Wrapper>
  );
};

export default LeadGeneration;

const bgGradiantAnimationSx: SxProps<Theme> = () => {
  return {
    position: 'relative',
    height: 'fit-content',
    width:{ xs: '100%', sm: 'auto' },
    justifyContent: 'center',
    alignItems: 'center',
    '@keyframes gradient': {
      '0%': {
        transform: 'scale(1)',
      },
      '100%': {
        transform: 'scale(1.45)',
      },
    },
    '&::before': {
      content: '""',
      background: 'linear-gradient(137.93deg, #BB5EFF 23.07%, #651FEA 67.41%)',
      position: 'absolute',
      width: '90%',
      height: '100%',
      borderRadius: '50%',
      filter: 'blur(75px) brightness(0.4)',
      transition: 'all 0.5s ease-in-out',
      animation: 'gradient 4s ease-in-out alternate infinite',
    },
  };
};