import { Components, Theme } from '@mui/material';

/**
 * @BackdropVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-backdrop/#main-content
 */
export const BackdropVariants: Components<
  Omit<Theme, 'components'>
>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style } = ownerState;
      return theme.unstable_sx([
        {},
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
};
