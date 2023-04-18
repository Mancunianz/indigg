'use client';
import { Button, Stack } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from '@nm/swiper';
import Image, { StaticImageData } from 'next/image';
import { map } from 'lodash';
import { useState } from 'react';

interface OverviewSliderProps {
  data: {
    images: (string | StaticImageData)[];
  };
}

const OverviewSlider = (props: OverviewSliderProps) => {
  const { data } = props;
  const { images } = data;
  const [previewImage, setPreviewImage] = useState<(typeof images)[0]>(
    images[0],
  );

  const handlePreviewImage = (image: (typeof images)[0]) => {
    setPreviewImage(image);
  };

  return (
    <Stack
      rowGap={4}
      mb={4}
      width={1}
      sx={{
        '& .swiper-wrapper': {
          '& .swiper-slide': {
            mr: 2,
            ':last-of-type': {
              mr: 0,
            },
          },
        },
      }}
    >
      <Image
        src={previewImage}
        alt={'preview_image'}
        width={941}
        height={529}
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: '25px',
          overflow: 'clip',
        }}
      />
      <Swiper
        slidesPerView={'auto'}
        cssMode={true}
        modules={[FreeMode]}
        style={{
          width: '100%',
        }}
      >
        {map([...images, ...images], (item, index) => {
          const isActive = previewImage === item;
          return (
            <SwiperSlide
              key={index}
              onClick={() => handlePreviewImage(item)}
              style={{
                width: '228px',
                height: '142px',
              }}
            >
              <Button variant={'text'} sx={{ p: 0 }}>
                <Image
                  src={item}
                  alt={`image_${index + 1}`}
                  width={228}
                  height={142}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12.5px',
                    overflow: 'clip',
                    filter: isActive ? 'brightness(1.2)' : 'brightness(0.8)',
                  }}
                />
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
};

export default OverviewSlider;