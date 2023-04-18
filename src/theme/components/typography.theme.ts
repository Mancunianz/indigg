import { Components, Theme, ThemeOptions } from '@mui/material';
import { poppins } from '@app/font';

/**
 * @ThemeOptions['typography']
 * Here we can define the typography theme
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyTheme: ThemeOptions['typography'] = {
  allVariants: {
    fontSmooth: 'always',
    textRendering: 'optimizeSpeed',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    position: 'relative',
    color: 'inherit',
    fontSize: 'inherit',
    ...poppins.style,
  },
};

/**
 * @ComponentsVariants['MuiTypography']
 *
 * Here we can define the typography Variants
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyVariants: Components<
  Omit<Theme, 'components'>
>['MuiTypography'] = {
  styleOverrides: {
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '64px' },
        fontWeight: 500,
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '35px' },
        fontWeight: 500,
      });
    },
    h3: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '32px' },
        fontWeight: 500,
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '28px' },
        fontWeight: 500,
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '26px' },
        fontWeight: 500,
      });
    },
    h6: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '22px' },
        fontWeight: 500,
      });
    },
    overline: ({ theme, ownerState }) => {
      const { paragraph } = ownerState;
      return theme.unstable_sx({
        fontSize: { xs:'12px',lg: '20px' },
        textTransform: paragraph ? 'none' : 'uppercase',
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '18px' },
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '16px' },
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '14px' },
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '12px' },
      });
    },
    caption: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { lg: '10px' },
      });
    },
    gutterBottom: ({ theme }) => {
      return theme.unstable_sx({
        mb: { xs: 1, lg: 2.5 },
      });
    },
  },
};