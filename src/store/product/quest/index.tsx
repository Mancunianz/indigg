import { QuestCardProps } from '@cc/productSection/featured/questCard';
import Crypto_Crusaders from '@/src/store/product/game/images/Crypto_Crusaders.png';
import Ether_Empires from '@/src/store/product/game/images/Ether_Empires.png';
import Decentraland_Adventures from '@/src/store/product/game/images/Decentraland_Adventures.png';
import Blockchain_Brawlers from '@/src/store/product/game/images/Blockchain_Brawlers.png';
import Axie_Infinity from '@/src/store/product/game/images/Axie_Infinity.png';
import { concat, map } from 'lodash';

export const tempQuests: Omit<QuestCardProps['data'], 'id'>[] = [
  {
    title: 'Safrootics',
    banner: Blockchain_Brawlers,
    type: 'Collecting',
    tag: 'Esports Tournament',
    difficulty: 'HARD',
    timeInMin: 'Extended (2 hours to 4 hours)',
    slots: 1,
    steps: 2,
    rewards: 100,
    likes: {
      count: 2.3,
      type: 'k',
    },
    href: '/',
  },
  {
    title: 'Planet IX',
    banner: Axie_Infinity,
    type: 'Escort',
    tag: 'Live Tournament',
    difficulty: 'MEDIUM',
    timeInMin: 'Moderate (30 minutes to 1 hour)',
    slots: 2,
    steps: 4,
    rewards: 150,
    likes: {
      count: 2.3,
      type: 'k',
    },
    href: '/',
  },
  {
    title: 'Delysium',
    banner: Crypto_Crusaders,
    type: 'Crafting',
    tag: 'Live Tournament',
    difficulty: 'EASY',
    timeInMin: 'Quick (less than 30 minutes)',
    slots: 3,
    steps: 6,
    rewards: 200,
    likes: {
      count: 2.3,
      type: 'k',
    },
    href: '/',
  },
  {
    title: 'Gods Unchained',
    banner: Ether_Empires,
    type: 'Exploration',
    tag: 'Fun Casual Gameplay',
    difficulty: 'HARD',
    timeInMin: 'Lengthy (1 hour to 2 hours)',
    slots: 2,
    steps: 8,
    rewards: 100,
    likes: {
      count: 2.3,
      type: 'k',
    },
    href: '/',
  },
  {
    title: 'Paradise Tycoon',
    banner: Decentraland_Adventures,
    type: 'Combat',
    tag: 'Esports Tournament',
    difficulty: 'MEDIUM',
    timeInMin: 'Moderate (30 minutes to 1 hour)',
    slots: 1,
    steps: 10,
    rewards: 150,
    likes: {
      count: 2.3,
      type: 'k',
    },
    href: '/',
  },
];

export const quests: QuestCardProps['data'][] = map(
  concat(tempQuests, tempQuests, tempQuests, tempQuests),
  (quest, index) => ({
    ...quest,
    id: index + 1,
  }),
);