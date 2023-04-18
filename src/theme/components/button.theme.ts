import { alpha, Components, Theme } from '@mui/material';
import { poppins } from '@/app/font';

/**
 * @ButtonVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-button/#customization
 */
export const ButtonVariants: Components<
  Omit<Theme, 'components'>
>['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style } = ownerState;
      return theme.unstable_sx([
        {
          ...poppins.style,
          textTransform: 'none',
          whiteSpace: 'nowrap',
          lineHeight: '150%',
          fontWeight: 500,
          fontSize: { xs: '16px' },
          borderRadius: '52px',
          textRendering: 'optimizeSpeed',
          letterSpacing: 'normal',
          height: 'inherit',
          fontSmooth: 'always',
          minWidth: 'fit-content',
          paddingInline: 3.25,
          paddingBlock: 1.5,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
    startIcon: ({ theme }) => {
      return theme.unstable_sx({
        mr: { xs: '0.3rem', sm: '0.3rem', lg: '0.3rem' },
        '& > :nth-of-type(1)': {
          fontSize: {
            xs: '1.5rem',
          },
        },
      });
    },
    endIcon: ({ theme }) => {
      return theme.unstable_sx({
        ml: { xs: '0.3rem', sm: '0.3rem', lg: '0.3rem' },
        '& > :nth-of-type(1)': {
          fontSize: {
            xs: '1.5rem',
          },
        },
      });
    },
    contained: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          '&.Mui-disabled': {
            color:
              color === 'inherit' || !color
                ? 'inherit'
                : palette[color].contrastText,
            backgroundColor:
              color === 'inherit' || !color ? 'inherit' : palette[color].main,
            opacity: 0.4,
          },
        },
      ]);
    },
    text: ({ ownerState, theme }) => {
      const { disableRipple, color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          padding: disableRipple ? 0 : '0.625rem 1.5rem',
          background: 'transparent',
          fontWeight: 400,
          border: 'none',
          boxShadow: 'none',
          '&:hover': {
            background: 'transparent',
          },
        },
        {
          '&.Mui-disabled': {
            color:
              color === 'inherit' || !color ? 'inherit' : palette[color].main,
            backgroundColor: 'transparent',
            opacity: 0.4,
          },
        },
      ]);
    },
    outlined: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          border: '1px solid',
          bgcolor: theme.palette.background.default,
        },
        {
          '&.Mui-disabled': {
            color:
              color === 'inherit' || !color ? 'inherit' : palette[color].main,
            backgroundColor: 'transparent',
            borderColor:
              color === 'inherit' || !color ? 'inherit' : palette[color].main,
            opacity: 0.4,
          },
        },
      ]);
    },
    containedSecondary: ({ theme }) => {
      return theme.unstable_sx({
        border: '1px solid',
        borderColor: alpha('#555555', 0.5),
      });
    },
  },
};