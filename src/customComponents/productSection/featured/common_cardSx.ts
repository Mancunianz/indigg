import { alpha, SxProps, Theme } from '@mui/material';

export const cardAnimationSx: SxProps<Theme> = (theme) => {
  const { palette } = theme;
  const { background } = palette;
  const transition = 'all 0.3s ease-in-out';
  return {
    cursor: 'pointer',
    borderRadius: 2.5,
    boxShadow: 'none',
    position: 'relative',
    backDropFilter: 'blur(14px)',
    background: alpha(background.default, 0.2),
    transition,
    overflow: 'hidden',
    objectPosition: 'center',
    img: {
      transition,
      objectPosition: 'center',
      filter: 'brightness(82%)',
    },
    '&:hover': {
      background: alpha('#A8A8A8', 0.2),
      transform: 'translateY(-34px)',
      img: {
        transform: 'scale(1.05)',
        filter: 'brightness(100%)',
      },
    },
  };
};