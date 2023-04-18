'use client';
import { Stack, StackProps } from '@mui/material';
import { forwardRef } from 'react';

export interface WrapperProps extends StackProps {
  sectionProps?: Omit<StackProps, 'children'>;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((props, ref) => {
  const { children, sectionProps, ...rest } = props;
  return (
    <Stack
      component={'section'}
      px={{ xs: 2, sm: 9, lg: 12, xl: 18.5 }}
      width={1}
      alignItems={'center'}
      position={'relative'}
      overflow={'hidden'}
      {...sectionProps}
    >
      <Stack
        width={1}
        maxWidth={1920}
        color={'text.primary'}
        alignItems={'center'}
        {...rest}
        ref={ref}
      >
        {children}
      </Stack>
    </Stack>
  );
});

export default Wrapper;

Wrapper.displayName = Wrapper.name;