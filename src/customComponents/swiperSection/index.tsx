'use client';
import ProductSection, { ProductSectionProps } from '@cc/productSection';
import { SwiperProps, SwiperSlideProps } from '@nm/swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { isArray, map, omit } from 'lodash';
import { Stack, StackProps, SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';

export type SwiperSectionProps = {
  SwiperProps?: Omit<SwiperProps, 'children'>;
  SwiperSlideProps?: Omit<SwiperSlideProps, 'children'>;
  SwiperSlideChildren: ReactNode[];
  SwiperSlots?: {
    SwiperContainerStartSlot?: ReactNode;
    SwiperContainerStartSlotProps?: StackProps;
    SwiperContainerEndSlot?: ReactNode;
    SwiperContainerEndSlotProps?: StackProps;
    SwiperWrapperStartSlot?: ReactNode;
    SwiperWrapperStartSlotProps?: StackProps;
    SwiperWrapperEndSlot?: ReactNode;
    SwiperWrapperEndSlotProps?: StackProps;
  };
} & Omit<ProductSectionProps, 'children'>;

const SwiperSection = (props: SwiperSectionProps) => {
  const {
    SwiperProps,
    SwiperSlideProps,
    SwiperSlideChildren,
    SwiperSlots,
    ...ProductSectionProps
  } = props;
  const { ContainerProps, ...restProps } = ProductSectionProps;
  const containerSx = ContainerProps?.sx;
  return (
    <ProductSection
      {...{
        ...{
          ContainerProps: {
            display: 'block',
            width: 1,
            ...omit(ContainerProps, 'sx'),
            sx: [
              swiperContainerSx,
              ...(isArray(containerSx) ? containerSx : [containerSx]),
            ],
          },
        },
        ...restProps,
      }}
    >
      <Swiper {...SwiperProps}>
        {SwiperSlideChildren?.length &&
          map(SwiperSlideChildren, (data, index) => {
            return (
              <SwiperSlide key={index} {...SwiperSlideProps}>
                {data}
              </SwiperSlide>
            );
          })}
        {SwiperSlots && SwiperSlots.SwiperContainerStartSlot && (
          <Stack
            slot={'container-start'}
            {...SwiperSlots.SwiperContainerStartSlotProps}
          >
            {SwiperSlots.SwiperContainerStartSlot}
          </Stack>
        )}
        {SwiperSlots && SwiperSlots.SwiperContainerEndSlot && (
          <Stack
            slot={'container-end'}
            {...SwiperSlots.SwiperContainerEndSlotProps}
          >
            {SwiperSlots.SwiperContainerEndSlot}
          </Stack>
        )}
        {SwiperSlots && SwiperSlots.SwiperWrapperStartSlot && (
          <Stack
            slot={'wrapper-start'}
            {...SwiperSlots.SwiperWrapperStartSlotProps}
          >
            {SwiperSlots.SwiperWrapperStartSlot}
          </Stack>
        )}
        {SwiperSlots && SwiperSlots.SwiperWrapperEndSlot && (
          <Stack
            slot={'wrapper-end'}
            {...SwiperSlots.SwiperWrapperEndSlotProps}
          >
            {SwiperSlots.SwiperWrapperEndSlot}
          </Stack>
        )}
      </Swiper>
    </ProductSection>
  );
};

export default SwiperSection;

const swiperContainerSx: SxProps<Theme> = (theme) => {
  const {} = theme;
  return {};
};