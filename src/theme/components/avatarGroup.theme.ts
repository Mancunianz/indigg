import { Components, Theme } from '@mui/material';

/**
 * @AvatarGroupVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-avatar/#grouped
 */
export const AvatarGroupVariants: Components<
  Omit<Theme, 'components'>
>['MuiAvatarGroup'] = {
  defaultProps: {
    sx: (theme) => {
      const defaultColor = theme.palette.getContrastText(
        theme.palette.background.paper,
      );
      return {
        flexDirection: 'row',
        '.MuiAvatar-root': {
          boxSizing: 'border-box',
          fontSize: 'small',
          ml: '-6px',
          ':last-of-type': {
            ml: '-6px',
          },
        },
      };
    },
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      return theme.unstable_sx({});
    },
  },
};
