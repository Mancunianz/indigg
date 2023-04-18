import { Components, Theme } from '@mui/material';

/**
 * @ToggleButtonGroupVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-toggle-button
 */
export const ToggleButtonVariants: Components<
  Omit<Theme, 'components'>
>['MuiToggleButton'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { disabled, color, selected, sx: style } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          borderColor: color
            ? color === 'standard'
              ? color
              : palette[color].main
            : 'inherit',
          color: color
            ? color === 'standard'
              ? color
              : palette[color].main
            : 'inherit',
          backgroundColor: color
            ? color === 'standard'
              ? color
              : palette[color].contrastText
            : 'inherit',
          '&.Mui-selected': {
            color: color
              ? color === 'standard'
                ? color
                : palette[color].contrastText
              : 'inherit',
            backgroundColor: color
              ? color === 'standard'
                ? color
                : palette[color].main
              : 'inherit',
            boxShadow: 'none',
            ':hover': {
              bgcolor: color
                ? color === 'standard'
                  ? color
                  : palette[color].main
                : 'inherit',
            },
          },
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
};
