import { Slider, sliderClasses, SliderProps } from '@nm/@mui/material';
import { Typography } from '@mui/material';
import { isArray } from 'lodash';
import { useState } from 'react';

interface SidebarSliderProps extends Omit<SliderProps, 'onChange'> {
  onChange?: (value: number, activeThumb: number) => void;
}

const SidebarSlider = (props: SidebarSliderProps) => {
  const { onChange, ...restSliderProps } = props;
  const [value, setValue] = useState(0);

  const handleSliderChange: SliderProps['onChange'] = (
    event: any,
    value: number | number[],
    activeThumb: number,
  ) => {
    const newValue = isArray(value) ? value[0] : value;
    setValue(newValue);
    onChange && onChange(newValue, activeThumb);
  };
  return (
    <>
      <Typography variant={'subtitle2'} color={'#B8B1B1'} mb={0.5}>
        {value}
      </Typography>
      <Slider
        sx={{
          color: 'common.white',
          [`& .${sliderClasses.thumb}`]: {
            color: 'common.white',
          },
        }}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        {...restSliderProps}
      />
    </>
  );
};

export default SidebarSlider;