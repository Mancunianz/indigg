'use client';
import ProductSection from '@/src/customComponents/productSection';
import { map } from 'lodash';
import ClanCard from '@/src/customComponents/productSection/featured/clanCard';

// Images
import { clans } from 'store/product/clan';
import MLink from '@cc/mLink';

const FeaturedGames = () => {
  return (
    <ProductSection
      variant={'FEATURED'}
      HeaderProps={{
        data: {
          type: 'Clans',
          title: 'Featured',
          action: (
            <MLink href={'/clans'} variant={'contained'} sx={{fontSize:{xs:'14px',lg:'16px'}}}>
              All Clans
            </MLink>
          ),
        },
      }}
    >
      {map(clans, (game, index) => {
        return (
          <ClanCard
            key={index}
            data={game}
            sx={{ flexShrink: 0, flexGrow: 0, flexBasis: 'auto' }}
          />
        );
      })}
    </ProductSection>
  );
};

export default FeaturedGames;
