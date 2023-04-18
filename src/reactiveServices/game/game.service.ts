import { GameCardProps } from '@cc/productSection/featured/gameCard';
import { BehaviorSubject, merge } from '@nm/rxjs';
import { GameGenre, GameNetwork, Platform } from '@/src/commomTypes';
import { FilterBaseService } from '@rs/filterBaseService';

export class GameService<
  T extends GameCardProps['data'] = GameCardProps['data'],
> {
  $games = new BehaviorSubject<T[]>([]);
  filterService: GameFilterService<T>;

  constructor(games: T[]) {
    this.$games.next(games);
    this.filterService = new GameFilterService(games);
  }
}

export class GameFilterService<
  T extends GameCardProps['data'] = GameCardProps['data'],
> extends FilterBaseService<T> {
  $filteredGames = new BehaviorSubject<T[]>([]);
  $platforms = new BehaviorSubject<Platform[]>([]);
  $genres = new BehaviorSubject<GameGenre[]>([]);
  $network = new BehaviorSubject<GameNetwork[]>([]);
  $rating = new BehaviorSubject<number>(0);

  constructor(games: T[]) {
    super();
    const $filter = merge(
      this.$platforms,
      this.$genres,
      this.$network,
      this.$rating,
    );

    $filter.subscribe({
      next: async () => {
        this.$isFiltering.next(true);
        await this.getFilteredGames(games).then((filteredGames) => {
          const isFilterActive =
            this.$platforms.value.length > 0 ||
            this.$genres.value.length > 0 ||
            this.$network.value.length > 0 ||
            this.$rating.value > 0;
          this.$isFilterActive.next(isFilterActive);
          this.$filteredGames.next(filteredGames);
          this.$isFiltering.next(false);
        });
      },
    });
  }

  getFilteredGames(games: T[]) {
    return this.filterPromise(games, async (game) => {
      return await Promise.all([
        this.getFilteredIntersectionItems(
          this.$platforms.value,
          game.platforms,
        ),
        this.getFilteredIntersectionItems(this.$genres.value, game.genre),
        this.getFilteredIntersectionItems(this.$network.value, game.network),
        this.getFilteredRatingItems(this.$rating.value, game.rating),
      ]).then((values) => !values.includes(false));
    });
  }
}