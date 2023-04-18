'use client';
import Wrapper, { WrapperProps } from '@/src/customComponents/wrapper';

import {
  Box,
  BoxProps,
  Stack,
  StackProps,
  SxProps,
  Theme,
} from '@mui/material';
import { ReactNode } from 'react';
import { ProductSectionVariant } from '@/src/commomTypes';
import SectionHeader, {
  SectionHeaderProps,
} from '@cc/productSection/subComponent/sectionHeader';
import { isArray } from 'lodash';

export interface ProductSectionProps
  extends Omit<WrapperProps, 'children' | 'title'> {
  children: ReactNode;
  HeaderProps?: SectionHeaderProps;
  ContainerProps?: Omit<StackProps, 'children'>;
  variant: ProductSectionVariant;
  sidebar?: ReactNode;
  sidebarPosition?: 'left' | 'right';
  sidebarContainerProps?: Omit<BoxProps, 'children'>;
}

const ProductSection = (props: ProductSectionProps) => {
  const {
    children,
    ContainerProps,
    variant,
    HeaderProps,
    sidebar,
    sidebarPosition = 'right',
    sidebarContainerProps = {},
    ...wrapperProps
  } = props;
  const { sx: sidebarContainerSxProp, ...restSidebarContainerProps } =
    sidebarContainerProps;

  const isSpotlight = variant === 'SPOTLIGHT';
  const finalSidebar = sidebar ? (
    <Box
      width={'fit-content'}
      minWidth={'fit-content'}
      sx={[
        sidebarContainerSx,
        ...(isArray(sidebarContainerSxProp)
          ? sidebarContainerSxProp
          : [sidebarContainerSxProp]),
      ]}
      {...restSidebarContainerProps}
    >
      {sidebar}
    </Box>
  ) : null;
  return (
    <Wrapper
      rowGap={10}
      py={isSpotlight ? { xs: 4, lg: 8.125 } : 11.5}
      px={isSpotlight ? { xs: 2, sm: 4, lg: 13.5 } : 0}
      {...wrapperProps}
      borderRadius={{ xs: '24px', lg: '52px' }}
      sx={{ backgroundColor: isSpotlight?'rgba(161, 59, 198, 0.14)':null }}
    >
      {HeaderProps && (
        <SectionHeader isSpotlight={isSpotlight} {...HeaderProps} />
      )}
      <Stack
        direction={{ xs: 'column', sm_md: 'row' }}
        width={1}
        columnGap={sidebar ? 3.5 : isSpotlight ? 5.5 : 1.8}
        rowGap={{ xs: 1, lg: 6.5 }}
        flexWrap={sidebar ? 'nowrap' : 'wrap'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'center', sm_md: 'unset' }}
        {...ContainerProps}
      >
        {sidebar ? (
          sidebarPosition === 'left' ? (
            <>
              {finalSidebar}
              {children}
            </>
          ) : (
            <>
              {children}
              {finalSidebar}
            </>
          )
        ) : (
          <>{children}</>
        )}
      </Stack>
    </Wrapper>
  );
};

export default ProductSection;

const sidebarContainerSx: SxProps<Theme> = () => {
  return {
    position: 'sticky',
    top: 0,
    flexShrink: 0,
    ml: 'auto',
  };
};
