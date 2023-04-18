import SidebarItemForListView, {
  SidebarItemForListViewProps,
} from '@cc/sidebar/sidebarItemForListView';
import useGame from '@rs/game/game.hook';
import { filter, keys, map, some } from 'lodash';
import { platformIcon } from '@cc/constant';
import { Platform } from '@/src/commomTypes';
import PlatformIcon from '@cc/platformIcons';
import { useObservable } from 'react-use';
import { BehaviorSubject } from '@nm/rxjs';

const GameSidebarPlatform = () => {
  const { $games, filterService } = useGame();
  const { $platforms } = filterService;
  const games = useObservable($games, $games.value);
  return (
    <SidebarItemForListView
      data={
        map(keys(platformIcon), (item: Platform) => {
          const count = filter(games, (value) => {
            return some(value.platforms, (platform) => platform === item);
          }).length;
          return {
            icon: <PlatformIcon platform={item} />,
            title: `${item} (${count})`,
            validatorKey: item,
          } as SidebarItemForListViewProps['data'][0];
        }) as unknown as SidebarItemForListViewProps['data']
      }
      $validateData={$platforms as BehaviorSubject<string[]>}
    />
  );
};

export default GameSidebarPlatform;