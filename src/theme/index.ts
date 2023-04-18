import { createTheme } from '@mui/material';
import { BreakpointTheme } from '@/src/theme/breakpoint.theme';
import { PaletteTheme } from '@/src/theme/palette.theme';
import { TypographyTheme } from '@/src/theme/components/typography.theme';
import { ComponentTheme } from '@/src/theme/components';

export type ThemeMode = 'light' | 'dark';

export const theme = (mode: ThemeMode) =>
  createTheme({
    breakpoints: BreakpointTheme,
    palette: PaletteTheme(mode),
    typography: TypographyTheme,
    components: ComponentTheme,
    shape: {
      borderRadius: 8,
    },
    mixins: {
      toolbar: {
        height: '80px',
        color: '#FFFFFF',
      },
    },
  });