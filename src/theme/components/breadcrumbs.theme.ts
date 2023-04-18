import { Components, Theme } from '@mui/material';

/**
 * @BreadcrumbsVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Breadcrumbs component
 *
 * @see https://mui.com/material-ui/react-breadcrumbs
 */
export const BreadcrumbsVariants: Components<
  Omit<Theme, 'components'>
>['MuiBreadcrumbs'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        fontSize: '12px',
      });
    },
    separator: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        fontSize: '12px',
        mx: 0.3,
      });
    },
    ol: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        fontSize: '12px',
      });
    },
    li: ({ ownerState, theme }) => {
      return theme.unstable_sx({
        fontSize: '12px',
      });
    },
  },
};
