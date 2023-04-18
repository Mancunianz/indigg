'use client';
import { WbSunnyOutlined } from '@nm/@mui/icons-material';
import { capitalize } from 'lodash';
import { ProductSection, ProductType } from '@/src/commomTypes';
import { ReactNode } from 'react';
import {
  Box,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from '@mui/material';

export interface SectionHeaderProps extends Omit<StackProps, 'children'> {
  data: {
    type?: Capitalize<ProductType | string>;
    title: Capitalize<ProductSection | string>;
    TitleTypographyProps?: Omit<TypographyProps, 'children'>;
    action?: ReactNode;
  };
  isSpotlight?: boolean;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { data, isSpotlight, ...HeaderWrapperSx } = props;
  const { type, title, TitleTypographyProps, action } = data;
  return (
    <Stack
      direction={'row'}
      width={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      {...HeaderWrapperSx}
    >
      <Typography
        variant={'h2'}
        display={'flex'}
        alignItems={'center'}
        columnGap={{ xs: 1, lg: 1.5 }}
        {...TitleTypographyProps}
      >
        {isSpotlight && <WbSunnyOutlined sx={{ fontSize: { xs: 'medium', lg: 'large' }}} />}
        {capitalize(title)}
        {type && (
          <Box component={'span'} color={'primary.light'}>
            {capitalize(type)}
          </Box>
        )}
      </Typography>
      {action}
    </Stack>
  );
};

export default SectionHeader;
