import { Components, Theme } from '@mui/material';

/**
 * @TabsVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-tabs/#customization
 */
export const TabsVariants: Components<Omit<Theme, 'components'>>['MuiTabs'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { disabled, color, variant, sx: style } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {},
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
    indicator: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        height: '1px',
      });
    },
  },
};
