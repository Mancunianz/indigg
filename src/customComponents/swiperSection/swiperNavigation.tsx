import { IconButton, Stack } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@nm/@mui/icons-material';

export interface SwiperNavigationProps {
  prevButtonClass?: string;
  nextButtonClass?: string;
}

const SwiperNavigation = (props: SwiperNavigationProps) => {
  const {
    prevButtonClass = swiperNavigation.prevButtonClass,
    nextButtonClass = swiperNavigation.nextButtonClass,
  } = props;

  return (
    <Stack
      columnGap={2}
      direction={'row'}
      sx={{
        '.swiper-button-lock': {
          display: 'none',
        },
        '.swiper-button-disabled': {
          '&:disabled': {
            opacity: 0.5,
            pointerEvents: 'none',
          },
        },
      }}
    >
      <IconButton
        className={prevButtonClass}
        size={'medium'}
        centerRipple={false}
      >
        <ArrowBackIosNew />
      </IconButton>
      <IconButton
        className={nextButtonClass}
        size={'medium'}
        centerRipple={false}
      >
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  );
};
export default SwiperNavigation;

export const swiperNavigation = {
  prevButtonClass: 'button-prev',
  nextButtonClass: 'button-next',
};