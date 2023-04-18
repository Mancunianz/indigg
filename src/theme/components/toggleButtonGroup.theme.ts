import { Components, Theme } from '@mui/material';

/**
 * @ToggleButtonGroupVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-toggle-button
 */
export const ToggleButtonGroupVariants: Components<
  Omit<Theme, 'components'>
>['MuiToggleButtonGroup'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { color, sx: style } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          height: '48px',
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
};
