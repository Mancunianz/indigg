import {
  clanActivity,
  clanLanguages,
  clanStatus,
  clanTags,
  clanTimeZone,
  gameGenre,
  gameNetwork,
  platforms,
  products,
  questDifficulty,
  questTags,
  questTime,
  questTypes,
} from '@cc/constant.server';

export type Count<T extends any = number> =
  | {
      count: T;
      type: 'k' | 'm';
    }
  | T;

export type ProductSection =
  | 'Featured'
  | 'Spotlight'
  | 'New'
  | 'Trending'
  | 'Browse'
  | 'Top'
  | 'Coming'
  | 'Related'
  | 'Reviews';

export type ProductSectionVariant = Uppercase<ProductSection>;

export type Platform = (typeof platforms)[number];
export type ProductType = (typeof products)[number];
export type QuestDifficulty = (typeof questDifficulty)[number];
export type QuestTag = (typeof questTags)[number];
export type QuestType = (typeof questTypes)[number];
export type QuestTime = (typeof questTime)[number];
export type ClanTag = (typeof clanTags)[number];
export type ClanStatus = (typeof clanStatus)[number];
export type ClanActivity = (typeof clanActivity)[number];
export type ClanLanguage = (typeof clanLanguages)[number];
export type ClanTimeZone = (typeof clanTimeZone)[number];
export type GameGenre = (typeof gameGenre)[number];
export type GameNetwork = (typeof gameNetwork)[number];

export type ProductRoutes = Lowercase<ProductType>;