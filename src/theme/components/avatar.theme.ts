import { Components, Theme } from '@mui/material';

/**
 * @AvatarVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Link component
 *
 * @see https://mui.com/material-ui/react-avatar
 */
export const AvatarVariants: Components<
  Omit<Theme, 'components'>
>['MuiAvatar'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const isDark = theme.palette.mode === 'dark';
      const isSrc = Boolean(ownerState?.src || ownerState?.srcSet);
      const bgcolor = isSrc
        ? '#ffffff00'
        : isDark
        ? theme.palette.getContrastText(theme.palette.background.paper)
        : theme.palette.background.paper;
      const defaultColor = theme.palette.getContrastText(bgcolor);
      return theme.unstable_sx([
        {
          backgroundColor: bgcolor,
          color: defaultColor,
        },
      ]);
    },
  },
};

declare module '@mui/material/Avatar' {
  /**
   * @mui/material/Avatar
   * Here we can override the AvatarPropsVariants
   */
  interface AvatarPropsVariantOverrides {}
}
