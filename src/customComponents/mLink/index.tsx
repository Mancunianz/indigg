import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { get, isArray, isString, some } from 'lodash';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useMemo } from 'react';
import { alpha, Button, ButtonProps, SxProps, Theme } from '@mui/material';

export type MLinkProps = {
  activeClassName?: string;
  activeColor?: string | ((theme: Theme) => string);
  inactiveColorOpacity?: number;
  activeUnderline?: boolean;
  // @ts-ignore
  href: NextLinkProps['href'];
} & Omit<ButtonProps<typeof NextLink>, 'href'>;

const MLink = (props: MLinkProps) => {
  const {
    activeClassName = 'active',
    activeColor,
    inactiveColorOpacity,
    activeUnderline,
    className: classNameProps,
    href,
    ...other
  } = props;
  const { sx, ...restMLinkProps } = other;
  const { variant, disableRipple } = restMLinkProps;

  const routePathname = usePathname();
  const segment = useSelectedLayoutSegments();

  const tempPathname = typeof href === 'string' ? href : href.pathname;
  const pathname =
    tempPathname === '/' || tempPathname === '#'
      ? tempPathname
      : tempPathname.endsWith('/')
      ? tempPathname.slice(0, -1)
      : tempPathname;
  const isLinkInSegment = some(segment, (s) => `/${s}` === pathname);
  const isLinkActive = routePathname === pathname || isLinkInSegment;
  const className = clsx(classNameProps, {
    [activeClassName]: isLinkActive && activeClassName,
  });

  const mLinkSx: SxProps<Theme> = useMemo(
    () => ({
      transition: 'opacity 0.3s ease',
      color: 'text.primary',
      opacity: isLinkActive
        ? 1
        : variant === 'text' && disableRipple
        ? inactiveColorOpacity || 0.5
        : 1,
      textDecoration: activeUnderline && isLinkActive ? 'underline' : 'none',
      ...(variant === 'text' && disableRipple && !isLinkActive
        ? {
            '&:active': {
              color: (theme) => {
                const finalActiveColor = activeColor
                  ? isString(activeColor)
                    ? get(theme.palette, activeColor) || activeColor
                    : activeColor(theme)
                  : theme.palette.getContrastText(
                      theme.palette.background.default,
                    );
                return alpha(finalActiveColor, 0.8);
              },
            },
          }
        : {}),
    }),
    [
      activeColor,
      activeUnderline,
      disableRipple,
      inactiveColorOpacity,
      isLinkActive,
      variant,
    ],
  );

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 ||
      href.indexOf('https') === 0 ||
      href.indexOf('mailto:') === 0);

  return (
    <Button
      href={href}
      component={NextLink}
      className={className}
      role={'link'}
      passHref
      target={isExternal ? '_blank' : '_self'}
      sx={[mLinkSx, ...(isArray(sx) ? sx : [sx])]}
      {...restMLinkProps}
    />
  );
};
export default MLink;