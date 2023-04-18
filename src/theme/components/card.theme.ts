import { Components, Theme } from '@mui/material';

/**
 * @CardVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-card
 */
export const CardVariants: Components<Omit<Theme, 'components'>>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx([
        {
          bgcolor: theme.palette.background.default,
        },
      ]);
    },
  },
};