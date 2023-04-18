import Crypto_Crusaders from '@/src/store/product/game/images/Crypto_Crusaders.png';
import Ether_Empires from '@/src/store/product/game/images/Ether_Empires.png';
import Decentraland_Adventures from '@/src/store/product/game/images/Decentraland_Adventures.png';
import Blockchain_Brawlers from '@/src/store/product/game/images/Blockchain_Brawlers.png';
import Axie_Infinity from '@/src/store/product/game/images/Axie_Infinity.png';
import { GameCardProps } from '@cc/productSection/featured/gameCard';
import { concat, map } from 'lodash';
import { HighlightCardProps } from '@cc/productSection/spotlight/card';
import Fortnite from '@/src/store/product/spotlight/images/Fortnite.png';
import Nitro_League from '@/src/store/product/spotlight/images/Nitro_League.png';

const tempGames: Omit<GameCardProps['data'], 'id'>[] = [
  {
    title: 'Crypto Crusaders',
    banner: Crypto_Crusaders,
    genre: ['Multiplayer', 'RPG'],
    platforms: ['WINDOWS', 'MAC'],
    network: ['Ethereum', 'Polygon'],
    rating: 4.5,
    href: '/',
  },
  {
    title: 'Ether Empires',
    banner: Ether_Empires,
    genre: ['Adventure', 'Casual'],
    platforms: ['IOS'],
    network: ['Ethereum', 'BNB Chain'],
    rating: 4,
    href: '/',
  },
  {
    title: 'Decentraland Adventures',
    banner: Decentraland_Adventures,
    genre: ['RPG', 'Strategy'],
    platforms: ['ANDROID'],
    network: ['BNB Chain', 'Solana'],
    rating: 4.5,
    href: '/',
  },
  {
    title: 'Blockchain Brawlers',
    banner: Blockchain_Brawlers,
    genre: ['Strategy', 'Casual'],
    platforms: ['WINDOWS', 'MAC', 'WEB'],
    network: ['Solana', 'Polygon'],
    rating: 3,
    href: '/',
  },
  {
    title: 'Axie Infinity',
    banner: Axie_Infinity,
    genre: ['Casual', 'RPG'],
    platforms: ['IOS', 'ANDROID'],
    network: ['Ethereum', 'BNB Chain'],
    rating: 5,
    href: '/',
  },
];

export const games: GameCardProps['data'][] = map(
  concat(tempGames, tempGames, tempGames, tempGames),
  (game, index) => ({
    ...game,
    id: index + 1,
  }),
);

export const spotlightGames: HighlightCardProps['data'][] = [
  {
    title: 'Fortnite - Web3',
    banner: Fortnite,
    href: '/',
    description:
      'A bite-sized multiplayer strategy game of wits and luck.  A bite-sized multiplayer strategy game of wits and luck',
  },
  {
    title: 'Nitro League - Web3',
    banner: Nitro_League,
    href: '/',
    description:
      'A bite-sized multiplayer strategy game of wits and luck.  A bite-sized multiplayer strategy game of wits and luck',
  },
];