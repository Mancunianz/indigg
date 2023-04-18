import { SlideCardProps } from 'customComponents/landingSection/slideCard';
import slideImage0 from '@/src/store/landingSwiper/images/slide_image_0.webp';
import slideImage1 from '@/src/store/landingSwiper/images/slide_image_1.webp';
import slideImage2 from '@/src/store/landingSwiper/images/slide_image_2.webp';
import slideImage3 from '@/src/store/landingSwiper/images/slide_image_3.webp';

export const landingSectionSwiperSlideImages: SlideCardProps['data'][] = [
  {
    title: 'Stella Fantasy',
    banner: slideImage0,
    description:
      'Immerse yourself in the world of Stella Fantasy, where you can battle enemies, explore different regions, and grow alongside captivating anime-style characters.',
    rating: 5,
    reviews: { count: 1.3, type: 'k' },
    links: [
      {
        name: 'Explore all Games',
        href: '/games',
      },
      {
        name: 'View Game',
        href: '/',
      },
    ],
  },
  {
    title: 'Gods Unchained',
    banner: slideImage1,
    description:
      'Gods Unchained is a free-to-play trading card game where players compete in epic duels using fantasy cards.',
    rating: 5,
    reviews: { count: 1.3, type: 'k' },
    links: [
      {
        name: 'Explore all Games',
        href: '/games',
      },
      {
        name: 'Play',
        href: '/',
      },
    ],
  },
  {
    title: 'The Fabled',
    banner: slideImage2,
    description:
      'The Fabled is an action-RPG where players overcome tremendous challenges, explore various worlds and collect rare items',
    rating: 5,
    reviews: { count: 1.3, type: 'k' },
    links: [
      {
        name: 'Explore all Quests',
        href: '/quests',
      },
      {
        name: 'View Quest',
        href: '/',
      },
    ],
  },
  {
    title: 'Warriors Gamer',
    banner: slideImage3,
    description:
      'Join the fight with a clan that values teamwork and strategy above all else, explore various worlds and collect rare items',
    rating: 5,
    reviews: { count: 2.3, type: 'k' },
    links: [
      {
        name: 'Explore all Clan',
        href: '/clans',
      },
      {
        name: 'View Clan',
        href: '/',
      },
    ],
  },
];