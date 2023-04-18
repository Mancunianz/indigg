'use client';
import { Stack, StackProps, TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { map, startCase } from 'lodash';
import MLink from '@/src/customComponents/mLink';
import keyboardJS from 'keyboardjs';
import { useEffect, useRef } from 'react';

interface NavbarProps extends Omit<StackProps, 'children'> {}

const Navbar = (props: NavbarProps) => {
  const { ...rest } = props;
  return (
    <Stack
      width={1}
      direction={'row'}
      columnGap={6}
      alignItems={'center'}
      justifyContent={'flex-start'}
      {...rest}
    >
      <SearchTextField />
      {map(routes, (route, index) => {
        const { name, path } = route;
        return (
          <MLink
            key={index}
            href={path}
            variant={'text'}
            disableRipple
            sx={{
              fontWeight: 600,
            }}
          >
            {startCase(name)}
          </MLink>
        );
      })}
    </Stack>
  );
};

export default Navbar;

const SearchTextField = () => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    keyboardJS.bind('ctrl + shift + k', () => {
      textFieldRef.current?.focus();
    });
    return () => {
      keyboardJS.unbind('ctrl + k');
    };
  }, []);
  return (
    <TextField
      inputRef={textFieldRef}
      InputProps={{
        endAdornment: <SearchRounded />,
        sx: {
          px: 2,
          'input::placeholder': {
            textAlign: 'center',
          },
          height: '41px !important',
        },
      }}
      sx={{
        maxWidth: '762px',
      }}
      fullWidth
      placeholder={'Search for game, clans, quests, etc.'}
    />
  );
};

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'Games',
    path: '/games',
  },
  {
    name: 'Clans',
    path: '/clans',
  },
  {
    name: 'Quests',
    path: '/quests',
  },
];