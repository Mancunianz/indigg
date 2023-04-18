'use client';
import GameCard from '@/src/customComponents/productSection/featured/gameCard';
import ProductSection from '@/src/customComponents/productSection';
import { map } from 'lodash';
import { games } from 'store/product/game';
import MLink from '@cc/mLink';

const FeaturedGames = () => {
  return (
    <ProductSection
      variant={'FEATURED'}
      HeaderProps={{
        data: {
          type: 'Games',
          title: 'Featured',
          action: (
            <MLink href={'/games'} variant={'contained'}>
              All Games
            </MLink>
          ),
        },
      }}
    >
      {map(games, (game, index) => {
        return (
          <GameCard
            key={index}
            data={game}
            isVideo={index===0||index===2}
            sx={{ flexShrink: 0, flexGrow: 0, flexBasis: 'auto' }}
          />
        );
      })}
    </ProductSection>
  );
};

export default FeaturedGames;