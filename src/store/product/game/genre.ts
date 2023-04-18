import { GenreCardProps } from '@c/productsPage/browseGames/genreSwiper/genreCard';
import multiplayer from './images/genre/multiplayer.png';
import adventure from './images/genre/adventure.png';
import rpg from './images/genre/rpg.png';
import strategy from './images/genre/strategy.png';
import casual from './images/genre/casual.png';

export const gameGenreImages: Omit<
  GenreCardProps['data'],
  'TitleTypographyProps'
>[] = [
  {
    title: 'Multiplayer',
    image: multiplayer,
  },
  {
    title: 'Adventure',
    image: adventure,
  },
  {
    title: 'RPG',
    image: rpg,
  },
  {
    title: 'Strategy',
    image: strategy,
  },
  {
    title: 'Casual',
    image: casual,
  },
  {
    title: 'Multiplayer',
    image: multiplayer,
  },
  {
    title: 'Adventure',
    image: adventure,
  },
  {
    title: 'RPG',
    image: rpg,
  },
  {
    title: 'Strategy',
    image: strategy,
  },
  {
    title: 'Casual',
    image: casual,
  },
];