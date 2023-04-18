import { ThemeOptions } from '@mui/material';

/**
 * @ThemeOptions['breakpoints']
 * Here we can define the breakpoints
 *
 * @see https://material-ui.com/customization/breakpoints/#breakpoints
 *
 * xs: 0,
 * xs_sm:288,
 * sm: 576,
 * sm_md: 672,
 * md: 768,
 * md_lg: 880,
 * lg: 992,
 * lg_xl: 1136,
 * xl: 1280,
 * xl_xxl: 1360,
 * xxl: 1440,
 */
export const BreakpointTheme: ThemeOptions['breakpoints'] = {
  values: {
    xs: 0, 
    xs_sm:288,
    sm: 576,
    sm_md: 672,
    md: 768,
    md_lg: 880,
    lg: 992,
    lg_xl: 1136,
    xl: 1280,
    xl_xxl: 1360,
    xxl: 1440,
  },
};

declare module '@mui/material/styles' {
  /**
   * @mui/material/styles
   * Here we can override the Breakpoints
   */
  interface BreakpointOverrides {
    xs: true;
    xs_sm:true,
    sm: true;
    sm_md: true;
    md: true;
    md_lg: true;
    lg: true;
    lg_xl: true;
    xl: true;
    xl_xxl: true;
    xxl: true;
  }
}