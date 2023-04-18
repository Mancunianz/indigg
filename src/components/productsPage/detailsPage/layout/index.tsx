'use client';
import { ReactNode } from 'react';
import { ProductRoutes } from '@/src/commomTypes';
import Grid2 from '@mui/material/Unstable_Grid2';
import Wrapper from '@cc/wrapper';
import { Stack, SxProps, Theme } from '@mui/material';
import Activity from '@c/productsPage/detailsPage/layout/activity';
import SocialFeedback from '@c/productsPage/detailsPage/layout/social';
import { games } from 'store/product/game';
import RelatedGamesSwiper from '@c/productsPage/detailsPage/related';
import { map } from 'lodash';
import MLink from '@cc/mLink';
import TwitchFeed from '@c/productsPage/detailsPage/twitchFeed';
import { twitchFeed } from '@/src/store/product/game/twitchFeed';

export interface ProductDetailsLayoutProps {
  children: ReactNode;
  params: {
    product: ProductRoutes;
    productId: string;
  };
}

const ProductDetailsLayout = (props: ProductDetailsLayoutProps) => {
  const { children, params } = props;
  const { product, productId } = params;
  return (
    <>
      <Wrapper display={'block'} width={1}>
        <Grid2 container spacing={4}>
          <Grid2 lg={7.5}>
            <Stack sx={navStackSx}>
              {map(otherPagesLink, (item, index) => {
                const { name, link } = item;
                return (
                  <MLink
                    key={index}
                    href={`/${product}/${productId}${link}`}
                    variant={'text'}
                    disableRipple
                  >
                    {name}
                  </MLink>
                );
              })}
            </Stack>
            {children}
          </Grid2>
          <Grid2 lg={4.5} component={Stack} direction={'column'} rowGap={4}>
            <Stack sx={navStackSx}>
              <MLink href={`#activity`} variant={'text'} disableRipple>
                #Activity
              </MLink>
            </Stack>
            <Activity />
            <SocialFeedback />
          </Grid2>
        </Grid2>
      </Wrapper>
      <TwitchFeed data={twitchFeed} />
      <RelatedGamesSwiper data={games} />
    </>
  );
};

export default ProductDetailsLayout;

const otherPagesLink = [
  {
    name: 'Overview',
    link: '/',
  },
  {
    name: 'Quest',
    link: '/quest',
  },
  {
    name: 'Clan',
    link: '/clan',
  },
  {
    name: 'Guide',
    link: '/guide',
  },
];

const navStackSx: SxProps<Theme> = () => {
  return {
    flexDirection: 'row',
    columnGap: 6,
    borderBottom: `1px solid #2D2D2D`,
    py: 2.75,
    mb: 3.25,
  };
};