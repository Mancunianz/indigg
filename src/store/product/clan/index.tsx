import { ClanCardProps } from '@cc/productSection/featured/clanCard';
import Red_Devils from '@/src/store/product/clan/images/Red_Devils.png';
import Warriors_Gamer from '@/src/store/product/clan/images/Warriors_Gamer.png';
import Assassin from '@/src/store/product/clan/images/Assassin.png';
import Warriors from '@/src/store/product/clan/images/Warriors.png';
import The_Best from '@/src/store/product/clan/images/The_Best.png';
import { concat, map } from 'lodash';
import { HighlightCardProps } from '@cc/productSection/spotlight/card';
import Fortnite from '@/src/store/product/spotlight/images/Fortnite.png';
import Nitro_League from '@/src/store/product/spotlight/images/Nitro_League.png';

const tempClans: Omit<ClanCardProps['data'], 'id'>[] = [
  {
    title: 'Red Devils',
    banner: Red_Devils,
    status: 'Active',
    tag: 'Featured',
    slots: 4,
    steps: 10,
    rewards: 100,
    activity: 'Registration',
    clanTimeZone: 'GMT',
    languages: ['English', 'Spanish'],
    rating: 3.5,
    href: '/',
  },
  {
    title: 'Warriors Gamer',
    banner: Warriors_Gamer,
    status: 'Inactive',
    tag: 'New',
    slots: 4,
    steps: 5,
    rewards: 140,
    activity: 'Announcement',
    clanTimeZone: 'GMT',
    languages: ['English', 'Spanish', 'French'],
    rating: 4.5,
    href: '/',
  },
  {
    title: 'Assassin',
    banner: Assassin,
    status: 'Semi- Active',
    tag: 'New',
    slots: 10,
    steps: 10,
    rewards: 200,
    activity: 'Match',
    clanTimeZone: 'EST',
    languages: ['English', 'French'],
    rating: 4,
    href: '/',
  },
  {
    title: 'Warriors',
    banner: Warriors,
    status: 'Active',
    tag: 'Popular',
    slots: 8,
    steps: 5,
    rewards: 100,
    activity: 'Registration',
    clanTimeZone: 'PST',
    languages: ['English', 'Spanish', 'French'],
    rating: 4.5,
    href: '/',
  },
  {
    title: 'The Best',
    banner: The_Best,
    status: 'Active',
    tag: 'Editor choice',
    slots: 2,
    steps: 5,
    rewards: 104,
    activity: 'Announcement',
    clanTimeZone: 'EST',
    languages: ['French', 'Spanish'],
    rating: 3,
    href: '/',
  },
];

export const clans: ClanCardProps['data'][] = map(
  concat(tempClans, tempClans, tempClans, tempClans),
  (clan, index) => ({
    ...clan,
    id: index + 1,
  }),
);

export const spotlightClans: HighlightCardProps['data'][] = [
  {
    title: 'Nitro League - Web3',
    banner: Nitro_League,
    href: '/',
    description:
      'A bite-sized multiplayer strategy game of wits and luck.  A bite-sized multiplayer strategy game of wits and luck',
  },
  {
    title: 'Fortnite - Web3',
    banner: Fortnite,
    href: '/',
    description:
      'A bite-sized multiplayer strategy game of wits and luck.  A bite-sized multiplayer strategy game of wits and luck',
  },
];