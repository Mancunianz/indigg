import { Components, Theme } from '@mui/material';

/**
 * @LinkVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-link
 */
export const LinkVariants: Components<Omit<Theme, 'components'>>['MuiLink'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        bgcolor: 'transparent',
        filter: 'none',
        '&:hover': {
          background: '#fff',
        },
      });
    },
  },
  defaultProps: {
    underline: 'none',
  },
};
