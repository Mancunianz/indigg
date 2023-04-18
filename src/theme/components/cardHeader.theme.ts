import { Components, Theme } from '@mui/material';

/**
 * @CardVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-card
 */
export const CardHeaderVariants: Components<
  Omit<Theme, 'components'>
>['MuiCardHeader'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const isDark = theme.palette.mode === 'dark';
      return theme.unstable_sx({});
    },
  },
};
