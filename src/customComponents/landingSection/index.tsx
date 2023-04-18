'use client';
import SwiperSection from '@cc/swiperSection';
import { landingSectionSwiperSlideImages } from '@/src/store/landingSwiper';
import SlideCard from 'customComponents/landingSection/slideCard';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import SliderThumb from '@cc/landingSection/sliderThumb';
import { alpha, SxProps, Theme } from '@nm/@mui/material';
import { map } from 'lodash';

const LandingSection = () => {
  return (
    <SwiperSection
      py={0}
      variant={'BROWSE'}
      SwiperProps={{
        autoplay: {
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        pagination: {
          clickable: true,
          el: '.swiper-custom-pagination',
        },
        modules: [EffectFade, Pagination, Autoplay],
        style: {
          width: '100%',
        },
      }}
      SwiperSlots={{
        SwiperWrapperEndSlot: (
          <SliderThumb data={landingSectionSwiperSlideImages} />
        ),
        SwiperContainerEndSlot: <></>,
        SwiperContainerEndSlotProps: {
          className: 'swiper-custom-pagination',
          direction: 'row',
          sx: customBulletSx,
        },
      }}
      SwiperSlideChildren={map(
        landingSectionSwiperSlideImages,
        (item, index) => {
          return <SlideCard key={index} data={item} index={index} />;
        },
      )}
    />
  );
};

export default LandingSection;

const customBulletSx: SxProps<Theme> = {
  height: '48px',
  alignItems: 'center',
  '.swiper-pagination-bullet': {
    transition: 'width 0.5s ease-out',
    background: (theme) => alpha(theme.palette.common.white, 0.5),
    width: '12px',
    height: '12px',
    '&.swiper-pagination-bullet-active': {
      width: '36px',
      background: (theme) => theme.palette.common.white,
      borderRadius: '24px',
    },
  },
};