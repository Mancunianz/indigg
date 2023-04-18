import { Components, Theme } from '@mui/material';

/**
 * @DialogVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-dialog/#customization
 */
export const DialogVariants: Components<
  Omit<Theme, 'components'>
>['MuiDialog'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style } = ownerState;
      return theme.unstable_sx([
        {},
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
  defaultProps: {
    componentsProps: {
      backdrop: {
        style: {
          backdropFilter: 'blur(5px)',
        },
      },
    },
  },
};
