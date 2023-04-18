import { CategorizedCardProps } from '@c/landingPage/categorized/categorizedCard';

//images
import heroesOfMavia from './images/heroesOfMavia.png';
import godsUnchained from './images/godsUnchained.png';
import delysium from './images/delysium.png';
import paradiseTycoon from './images/paradiseTycoon.png';
import thetanArena from './images/thetanArena.png';

export const categorizedColumnData: CategorizedCardProps['data'][] = [
  {
    avatar: heroesOfMavia,
    title: 'Heroes of Mavia',
    description:
      'Build your army, defend your base and fight for Ruby in Heroes of Mavia',
    tag: 'Released 9 days ago',
    href: '#',
  },
  {
    avatar: godsUnchained,
    title: 'Gods Unchained',
    description: 'Wilderness is an immersive survival game that will take you.',
    tag: 'Eurogamer',
    href: '#',
  },
  {
    avatar: delysium,
    title: 'Delysium',
    description: 'Battle Royale Shooter',
    tag: 'IGN',
    href: '#',
  },
  {
    avatar: paradiseTycoon,
    title: 'Paradise Tycoon',
    description:
      'Choose your character and weapons wisely, and make your way through',
    tag: 'PC Gamer',
    href: '#',
  },
  {
    avatar: thetanArena,
    title: 'Thetan Arena',
    description: 'Battle Arena',
    tag: 'Rock Paper Shotgun',
    href: '#',
  },
];