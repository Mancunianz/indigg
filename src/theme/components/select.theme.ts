import { Components, Theme } from '@mui/material';

/**
 * @SelectVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the button component
 *
 * @see https://mui.com/material-ui/react-seslect/#customization
 */
export const SelectVariants: Components<
  Omit<Theme, 'components'>
>['MuiSelect'] = {
  variants: [
    {
      props: { variant: 'outlined', color: 'primary' },
      style: ({ theme }) => {
        return theme.unstable_sx({
          '& .MuiSvgIcon-root': {
            color: 'primary.main',
            transition: 'all 0.4s ease-in-out',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
        });
      },
    },
  ],
};
