'use client';
import Wrapper from '@cc/wrapper';
import Grid2 from '@mui/material/Unstable_Grid2';
import { isArray, map, slice } from 'lodash';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import MLink from '@cc/mLink';
import { games } from 'store/product/game';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';

const ExploreCatalog = () => {
  return (
    <Wrapper py={32}>
      <Grid2 container spacing={21.5}>
        <Grid2 sm={6} lg={8}>
          <Stack direction={'row'} spacing={-3}>
            {map(slice(games, 0, 4), (game, index, arr) => {
              const { banner, title, href } = game;
              return (
                <MLink
                  key={index}
                  href={href}
                  variant={'text'}
                  sx={[
                    {
                      p: 0,
                      marginTop: `${index * 20}px !important`,
                      overflow: 'clip',
                      height: 'fit-content',
                      width: 'fit-content',
                      borderRadius: '2.75px',
                      zIndex: index,
                      position: 'relative',
                      '&:hover': {
                        zIndex: arr.length,
                      },
                    },
                    ...(isArray(cardAnimationSx)
                      ? cardAnimationSx
                      : [cardAnimationSx]),
                  ]}
                >
                  <Image
                    src={banner}
                    alt={title}
                    width={256}
                    height={302}
                    placeholder={'blur'}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </MLink>
              );
            })}
          </Stack>
        </Grid2>
        <Grid2 xs={12} sm={6} lg={4}>
          <Stack width={0.85}>
            <Typography variant={'h3'} fontWeight={500} lineHeight={'180%'}>
              Explore our Catalog
            </Typography>
            <Typography variant={'overline'} paragraph mb={6}>
              Rows by genre, features, price, and more to find your next
              favourite game. Rows by genre, features, price, and more to find
              your next favourite game.
            </Typography>
            <MLink href={'/games'} variant={'contained'}>
              Explore all Games
            </MLink>
          </Stack>
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

export default ExploreCatalog;