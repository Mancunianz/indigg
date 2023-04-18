import { ThemeOptions } from '@mui/material';
import { ThemeMode } from '@/src/theme/index';

/**
 * @ThemeOptions['palette']
 * Here we can define the palette
 *
 * @see https://material-ui.com/customization/palette/#palette
 */
export const PaletteTheme = (mode: ThemeMode): ThemeOptions['palette'] => {
  const isLight = mode !== 'dark';
  return {
    mode: mode,
    primary: {
      light: '#3772FF',
      main: '#0041E6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#242325',
      contrastText: '#fff',
    },
    success: {
      main: '#30D6B0',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FDBC1F',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3F5EFB',
      contrastText: '#ffffff',
      light: '#0B9BD5',
    },
    error: {
      main: '#FE8668',
      contrastText: '#fff',
    },
    text: {
      disabled: '#00000050',
      primary: isLight ? '#003C4D' : '#FFFFFF',
      secondary: isLight ? '#52757F' : '#D4D4D4',
      body: isLight ? '#212121' : '#FFFFFF',
      subtitle: isLight ? '#6B6B6B' : '#AEAEAE',
      caption: isLight ? '#9B9B9B' : '#868484',
    },
    background: {
      default: isLight ? '#ffffff' : '#121212',
      paper: isLight ? '#F0FAFD' : '#2A2A2A',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
    divider: '#FFFFFF',
  };
};

declare module '@mui/material/styles' {
  /**
   * @mui/material/styles
   * Here we can override the TypeText
   */
  interface TypeText {
    body: string;
    subtitle: string;
    caption: string;
  }
}
