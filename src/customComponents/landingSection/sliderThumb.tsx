import { filter, isArray, map } from 'lodash';
import { SlideCardProps } from '@cc/landingSection/slideCard';
import { Box, Stack, StackProps } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSwiper } from '@nm/swiper/react';
import { alpha } from '@nm/@mui/material';

export interface SliderThumbProps extends Omit<StackProps, 'children'> {
  data: SlideCardProps['data'][];
}

const SliderThumb = (props: SliderThumbProps) => {
  const { data, ...stackProps } = props;
  const { sx, ...restProps } = stackProps;
  return (
    <Stack
      direction={'row'}
      spacing={2.75}
      sx={[
        {
          position: 'absolute',
          bottom: 32,
          right: 32,
          zIndex: 9,
        },
        ...(isArray(sx) ? sx : [sx]),
      ]}
      {...restProps}
    >
      {map(filter(data), (item, index) => {
        return <SliderThumbCard key={index} data={item} index={index} />;
      })}
    </Stack>
  );
};

export default SliderThumb;

interface SliderThumbCardProps {
  data: SliderThumbProps['data'][0];
  index: number;
}

const SliderThumbCard = (props: SliderThumbCardProps) => {
  const { data, index } = props;
  const { banner } = data;
  const swiperInstance = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    swiperInstance &&
      swiperInstance.on('slideChange', (swiper) => {
        setActiveIndex(swiper.realIndex);
      });
    return () => {
      swiperInstance && swiperInstance.off('slideChange');
    };
  }, [swiperInstance]);

  const handleClick = () => {
    swiperInstance && swiperInstance.slideTo(index);
  }
  return (
    <Box
      width={128}
      height={106}
      position={'relative'}
      borderRadius={2}
      overflow={'hidden'}
      onClick={handleClick}
      sx={{
        border: '1px solid',
        cursor: 'pointer',
        borderColor: (theme)=>alpha(theme.palette.common.white,0.5),
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: index > activeIndex ?'transparent':'common.black',
          opacity: 0.5,
          animation:
            activeIndex === index ? 'slideThumb 6s ease' : 'none',
          '@keyframes slideThumb': {
            '0%': {
              bgcolor:'common.black',
              transform: 'translateX(-100%)',
            },
            '100%': {
              bgcolor:'common.black',
              transform: 'translateX(0%)',
            },
          },
        },
      }}
    >
      <Image
        src={banner}
        fill
        sizes={'200'}
        alt={''}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
};