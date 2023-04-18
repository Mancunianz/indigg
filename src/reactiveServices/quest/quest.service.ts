import { BehaviorSubject, merge } from '@nm/rxjs';
import { QuestDifficulty, QuestTime, QuestType } from '@/src/commomTypes';
import { QuestCardProps } from '@cc/productSection/featured/questCard';
import { FilterBaseService } from '@rs/filterBaseService';

export class QuestService<
  T extends QuestCardProps['data'] = QuestCardProps['data'],
> {
  $quests = new BehaviorSubject<T[]>([]);
  filterService: QuestFilterService<T>;

  constructor(quests: T[]) {
    this.$quests.next(quests);
    this.filterService = new QuestFilterService(quests);
  }
}

export class QuestFilterService<
  T extends QuestCardProps['data'] = QuestCardProps['data'],
> extends FilterBaseService<T> {
  $filteredQuests = new BehaviorSubject<T[]>([]);
  $difficulty = new BehaviorSubject<QuestDifficulty[]>([]);
  $timeRequires = new BehaviorSubject<QuestTime[]>([]);
  $types = new BehaviorSubject<QuestType[]>([]);

  constructor(quests: T[]) {
    super();
    const $filter = merge(this.$difficulty, this.$timeRequires, this.$types);

    $filter.subscribe({
      next: async () => {
        this.$isFiltering.next(true);
        await this.getFilteredQuests(quests).then((filteredQuests) => {
          const isFilterActive =
            this.$difficulty.value.length > 0 ||
            this.$timeRequires.value.length > 0 ||
            this.$types.value.length > 0;
          this.$isFilterActive.next(isFilterActive);
          this.$filteredQuests.next(filteredQuests);
          this.$isFiltering.next(false);
        });
      },
    });
  }

  getFilteredQuests(quests: T[]) {
    return this.filterPromise(quests, async (quest) => {
      return await Promise.all([
        this.getFilteredIntersectionItems(
          this.$difficulty.value,
          quest.difficulty,
        ),
        this.getFilteredIntersectionItems(
          this.$timeRequires.value,
          quest.timeInMin,
        ),
        this.getFilteredIntersectionItems(this.$types.value, quest.type),
      ]).then((values) => !values.includes(false));
    });
  }
}