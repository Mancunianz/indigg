import { BehaviorSubject } from '@nm/rxjs';
import { concat, intersection, isArray, remove } from 'lodash';
import { Count } from '@/src/commomTypes';

export class FilterBaseService<F extends any> {
  $isFiltering = new BehaviorSubject<boolean>(false);
  $isFilterActive = new BehaviorSubject<boolean>(false);
  // filterProductsWith = (products: T[], functions: Promise<boolean>[]) => {
  //   return this.filterPromise(products, async (product) => {
  //     return await Promise.all(functions.map((i) => i())).then(
  //       (values) => !values.includes(false),
  //     );
  //   });
  // };

  getFilteredIntersectionItems = async <T extends any = any>(
    validatorData: T[],
    toFilterData: T | T[],
  ) => {
    return new Promise<boolean>((resolve) => {
      if (validatorData.length === 0) resolve(true);
      if (!isArray(toFilterData)) {
        resolve(validatorData.includes(toFilterData));
      } else {
        resolve(intersection(validatorData, toFilterData).length > 0);
      }
    });
  };

  getFilteredRatingItems = async <T extends number = number>(
    validatorData: T,
    toFilterData: Count<T>,
  ) => {
    return new Promise<boolean>((resolve) => {
      resolve(
        (typeof toFilterData === 'number'
          ? toFilterData
          : toFilterData.count) >= validatorData,
      );
    });
  };

  filterPromise = async <T extends any = any>(
    values: T[],
    callbackFn: (value: T) => Promise<boolean>,
  ) => {
    const promises = values.map(callbackFn);
    const results = await Promise.all(promises);
    return values.filter((_, index) => results[index]);
  };
  handleValidateItem = <T extends string = string>(
    item: T,
    $validatorData: BehaviorSubject<T[]>,
  ) => {
    const index = $validatorData.value.indexOf(item);
    if (index !== -1) {
      $validatorData.next(
        remove($validatorData.value, (value) => value !== item),
      );
    } else {
      $validatorData.next(concat($validatorData.value, item));
    }
  };
}