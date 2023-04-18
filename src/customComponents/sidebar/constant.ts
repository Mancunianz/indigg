import { SxProps, Theme } from '@mui/material';

export const sidebarCommonSx: SxProps<Theme> = () => {
  return {
    position: 'sticky',
    top: 0,
    width: '300px',
    borderRadius: 2,
    overflow: 'hidden',
  };
};