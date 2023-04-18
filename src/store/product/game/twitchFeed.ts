import { TwitchFeedProps } from '@c/productsPage/detailsPage/twitchFeed';

// Images
import banner1 from './images/twitchFeed/feed_1.png';
import banner2 from './images/twitchFeed/feed_2.png';
import banner3 from './images/twitchFeed/feed_3.png';
import banner4 from './images/twitchFeed/feed_4.png';
import avatar1 from './images/twitchFeed/avatars/avatarFeed_1.png';
import avatar2 from './images/twitchFeed/avatars/avatarFeed_2.png';
import avatar3 from './images/twitchFeed/avatars/avatarFeed_3.png';
import avatar4 from './images/twitchFeed/avatars/avatarFeed_4.png';

export const twitchFeed: TwitchFeedProps['data'] = [
  {
    title: 'COCINANDO NUEVO EQUIP...',
    banner:banner1,
    avatar: avatar1,
    tag1: 'CryptoKid',
    tag2: 'Web3',
  },
  {
    title: '[ENG] Future  BA.',
    banner:banner2,
    avatar: avatar2,
    tag1: 'CyberNinja ',
    tag2: 'tokens',
  },
  {
    title: '[ENG]  How to play',
    banner:banner3,
    avatar: avatar3,
    tag1: 'PixelPunk',
    tag2: 'Web3',
  },
  {
    title: '[ENG]  Strategy for tokens',
    banner:banner4,
    avatar: avatar4,
    tag1: 'PixelPunk',
    tag2: 'Web3',
  },
];