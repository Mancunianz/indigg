import { Components, Theme } from '@mui/material';

/**
 * @AppBarVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-app-bar
 */
export const AppBarVariants: Components<
  Omit<Theme, 'components'>
>['MuiAppBar'] = {
  defaultProps: {
    position: 'sticky',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        width: 1,
        background: '#212121',
        px: 8,
      });
    },
  },
};
