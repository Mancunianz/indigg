'use client';
import { theme } from '@/src/theme';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import BaseAppBar from '@/src/components/layout/appbar';
import BaseFooter from '@/src/components/layout/footer';
import { CacheProvider } from '@nm/@emotion/react';
import { createEmotionCache } from '@/src/theme/emotionCache';
import LeadGeneration from '@c/layout/leadGeneration';

interface BaseLayoutProps {
  children: ReactNode;
}

const clientSideEmotionCache = createEmotionCache();
const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const finalTheme = useMemo(
    () => theme(prefersDarkMode ? 'dark' : 'dark'),
    [prefersDarkMode],
  );

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline enableColorScheme />
        <BaseAppBar />
        {children}
        <LeadGeneration />
        <BaseFooter />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default BaseLayout;