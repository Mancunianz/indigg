import { BehaviorSubject, merge } from '@nm/rxjs';
import { ClanCardProps } from '@cc/productSection/featured/clanCard';
import { ClanLanguage, ClanStatus, ClanTimeZone } from '@/src/commomTypes';
import { FilterBaseService } from '@rs/filterBaseService';

export class ClanService<
  T extends ClanCardProps['data'] = ClanCardProps['data'],
> {
  $clan = new BehaviorSubject<T[]>([]);
  filterService: ClanFilterService<T>;

  constructor(clans: T[]) {
    this.$clan.next(clans);
    this.filterService = new ClanFilterService(clans);
  }
}

export class ClanFilterService<
  T extends ClanCardProps['data'] = ClanCardProps['data'],
> extends FilterBaseService<T> {
  $filteredClans = new BehaviorSubject<T[]>([]);
  $status = new BehaviorSubject<ClanStatus[]>([]);
  $languages = new BehaviorSubject<ClanLanguage[]>([]);
  $timeZone = new BehaviorSubject<ClanTimeZone[]>([]);
  $rating = new BehaviorSubject<number>(0);

  constructor(clans: T[]) {
    super();
    const $filter = merge(
      this.$status,
      this.$languages,
      this.$timeZone,
      this.$rating,
    );

    $filter.subscribe({
      next: async () => {
        this.$isFiltering.next(true);
        await this.getFilteredClans(clans).then((filteredClans) => {
          const isFilterActive =
            this.$status.value.length > 0 ||
            this.$languages.value.length > 0 ||
            this.$timeZone.value.length > 0 ||
            this.$rating.value > 0;
          this.$isFilterActive.next(isFilterActive);
          this.$filteredClans.next(filteredClans);
          this.$isFiltering.next(false);
        });
      },
    });
  }

  getFilteredClans(clans: T[]) {
    return this.filterPromise(clans, async (clan) => {
      return await Promise.all([
        this.getFilteredIntersectionItems(this.$status.value, clan.status),
        this.getFilteredIntersectionItems(
          this.$languages.value,
          clan.languages,
        ),
        this.getFilteredIntersectionItems(
          this.$timeZone.value,
          clan.clanTimeZone,
        ),
        this.getFilteredRatingItems(this.$rating.value, clan.rating),
      ]).then((values) => !values.includes(false));
    });
  }
}