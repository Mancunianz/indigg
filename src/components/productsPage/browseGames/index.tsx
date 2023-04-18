'use client';
import { map } from 'lodash';
import ProductSection from '@cc/productSection';
import Grid2 from '@mui/material/Unstable_Grid2';
import { games } from 'store/product/game';
import GameCard from '@cc/productSection/featured/gameCard';
import GenreSwiper from '@c/productsPage/browseGames/genreSwiper';
import { gameGenreImages } from '@/src/store/product/game/genre';
import GameSidebar from '@c/productsPage/browseGames/gameSidebar';
import GameProvider from '@rs/game';
import { GameService } from '@rs/game/game.service';
import { useRef } from 'react';
import useGame from '@rs/game/game.hook';
import { useObservable } from 'react-use';
import { AnimatePresence, motion } from '@nm/framer-motion';
import { filterMotionProps } from '@c/productsPage/common_constants';

const BrowseGames = () => {
  const gameServiceRef = useRef(new GameService(games));
  return (
    <GameProvider value={gameServiceRef.current}>
      <GenreSwiper data={gameGenreImages} />
      <ProductSection
        variant={'BROWSE'}
        HeaderProps={{
          data: {
            type: 'Games',
            title: 'Browse',
          },
        }}
        sidebar={<GameSidebar />}
      >
        <AnimatePresence>
          <Grid2
            container
            columnSpacing={2}
            rowSpacing={6.5}
            height={'fit-content'}
            component={motion.div}
            layout
          >
            <FilteredGameItem />
          </Grid2>
        </AnimatePresence>
      </ProductSection>
    </GameProvider>
  );
};

export default BrowseGames;

const FilteredGameItem = () => {
  const { $games, filterService } = useGame();
  const { $filteredGames } = filterService;
  const games = useObservable($filteredGames, $games.value);
  return (
    <>
      {map(games, (game) => {
        const { id } = game;
        return (
          <Grid2 key={id} component={motion.div} layout {...filterMotionProps}>
            <GameCard data={game} />
          </Grid2>
        );
      })}
    </>
  );
};