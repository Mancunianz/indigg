import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import Image from 'next/image';
import Indigg_logo from './images/indi_gg_Logo.png';
import Navbar from '@c/layout/navbar';
import Wrapper from '@cc/wrapper';

const BaseAppBar = () => {
  return (
    <AppBar sx={{ mb: 10 }}>
      <Toolbar
        component={Wrapper}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Stack direction={'row'} columnGap={1} alignItems={'inherit'}>
          <Image src={Indigg_logo} alt={'indi_gg_logo'} />
          <Typography variant={'h6'} component={'span'} fontWeight={700}>
            INDIGG
          </Typography>
        </Stack>
        <Navbar width={0.6} ml={'auto'} mr={7} />
        <Stack direction={'row'} columnGap={4} alignItems={'inherit'}>
          <Badge
            badgeContent={8}
            overlap={'circular'}
            componentsProps={{
              badge: {
                style: {
                  background: '#FF4E4E',
                  width: '19.15px',
                  height: '19.15px',
                },
              },
            }}
          >
              <IconButton
                aria-label={'Notifications'}
                sx={{
                  background: '#35314D',
                  width: '45px',
                  height: '45px',
                }}
              >
                <NotificationsNoneOutlined />
              </IconButton>
            </Badge>
            <Button variant={'contained'}>Connect Wallet</Button>
          </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default BaseAppBar;
