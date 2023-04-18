'use client';
import { Rating, Stack, Typography } from '@mui/material';
import OverviewInfoCard, {
  OverviewInfoCardProps,
} from '@c/productsPage/detailsPage/overview/overviewInfo/overviewInfoCard';
import { CurrencyBitcoinRounded } from '@nm/@mui/icons-material';
import { map } from 'lodash';
import PlatformIcon from '@cc/platformIcons';
import { Platform } from '@/src/commomTypes';
import { useRef } from 'react';

const OverviewInfo = () => {
  const platformInfoCard = useRef(null);
  const platform: Platform[] = ['WEB', 'IOS', 'ANDROID'];
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <OverviewInfoCard title={'REVIEWS'} {...overInfoCardProps}>
        <Stack
          height={'inherit'}
          direction={'row'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
        >
          <Typography variant={'h2'} fontWeight={700} lineHeight={1}>
            4.0
          </Typography>
          <Rating value={4.0} precision={0.5} readOnly sx={{ mb: 1 }} />
        </Stack>
      </OverviewInfoCard>
      <OverviewInfoCard title={'BLOCKCHAIN'} {...overInfoCardProps}>
        <Stack height={'inherit'} direction={'row'} alignItems={'flex-end'}>
          <CurrencyBitcoinRounded
            sx={{
              border: '2px solid',
              borderColor: 'text.primary',
              p: 0.3,
              borderRadius: '50%',
            }}
            fontSize={'large'}
          />
        </Stack>
      </OverviewInfoCard>
      <OverviewInfoCard
        ref={platformInfoCard}
        title={'PLATFORM'}
        {...overInfoCardProps}
      >
        <Stack
          height={'inherit'}
          direction={'row'}
          alignItems={'flex-end'}
          columnGap={1}
        >
          {map(platform, (item, index) => {
            return (
              <PlatformIcon
                key={index}
                platform={item}
                fontSize={'large'}
                isHover
                hoverRef={platformInfoCard}
              />
            );
          })}
        </Stack>
      </OverviewInfoCard>
    </Stack>
  );
};

export default OverviewInfo;
const overInfoCardProps: Omit<OverviewInfoCardProps, 'children'> = {
  sx: { p: 2.5 },
  cardHeaderProps: {
    sx: { p: 0 },
  },
  cardContentProps: {
    sx: { p: 0, height: 1, '&:last-child': { p: 0 } },
  },
};