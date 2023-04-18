import { Count } from '@/src/commomTypes';
import { isNumber } from 'lodash';
import { SxProps, Theme } from '@mui/material';

export const getCount = (data: Count): string =>
  (isNumber(data) ? data : data.count + data.type).toString();

export const textEllipsis = (maxLines?: number): SxProps<Theme> => {
  return {
    maxLines: maxLines || 1,
    lineClamp: maxLines || 1,
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitLineClamp: maxLines || 1,
    WebkitBoxOrient: 'vertical',
  };
};