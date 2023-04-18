import { Components, Theme } from '@mui/material';

/**
 * @TabVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-tabs/#customization
 */
export const TabVariants: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { disabled, color, variant, sx: style, children } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
          lineHeight: '150%',
          fontWeight: 500,
          fontSize: { xs: '16px' },
          textRendering: 'optimizeSpeed',
          letterSpacing: 'normal',
          fontSmooth: 'always',
          minWidth: 'fit-content',
          width: 'fit-content',
          height: '51px',
          minHeight: 'initial',
          paddingBlock: 1.5,
          borderBottom: 1,
          borderColor: 'primary.main',
          '&.Mui-selected': {
            color: 'text.primary',
          },
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
};
