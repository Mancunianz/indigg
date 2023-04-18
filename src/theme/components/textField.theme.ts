import { alpha, Components, Theme } from '@mui/material';

/**
 * @TextFieldVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-text-field/#customization
 */
export const TextFieldVariants: Components<
  Omit<Theme, 'components'>
>['MuiTextField'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { disabled, color, variant, error, value, sx: style } = ownerState;
      const { palette } = theme;
      const finalColor = palette[error ? 'error' : color || 'primary'].main;
      return theme.unstable_sx([
        {
          borderRadius: 3.75,
          overflow: 'clip',
          '& .MuiInputBase-root': {
            height: '48px',
            background: alpha(palette.common.white, 0.05),
            '&.Mui-focused': {
              background: alpha(palette.common.white, 0.05),
            },
          },
          '& .MuiInputAdornment-root': {
            color: finalColor,
          },
          '& .MuiOutlinedInput-root:hover': {
            'input:not([disabled]) ~ .MuiOutlinedInput-notchedOutline': {
              borderColor: finalColor,
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: finalColor,
            display: 'none',
          },
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
};
