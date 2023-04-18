'use client';
import { List, ListItem } from '@mui/material';
import SidebarItem, { SidebarItemProps } from '@cc/sidebar/sidebarItem';
import { sidebarCommonSx } from '@cc/sidebar/constant';
import { isArray, map } from 'lodash';
import SidebarSlider from '@cc/sidebar/sidebarSlider';
import useGame from '@rs/game/game.hook';
import { GameService } from '@rs/game/game.service';
import GameSidebarPlatform from '@c/productsPage/browseGames/gameSidebar/gameSidebarPlatform';
import { gameGenre, gameNetwork } from '@cc/constant.server';
import SidebarItemForListView from '@cc/sidebar/sidebarItemForListView';

const GameSidebar = () => {
  const gameService = useGame();
  return (
    <List
      disablePadding
      sx={[...(isArray(sidebarCommonSx) ? sidebarCommonSx : [sidebarCommonSx])]}
    >
      {map(sidebarItems(gameService), (item, index) => {
        const { children, ...restProps } = item;
        return (
          <ListItem key={index} disableGutters disablePadding>
            <SidebarItem {...restProps}>{children}</SidebarItem>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GameSidebar;

const sidebarItems = (gamesService: GameService): SidebarItemProps[] => {
  const { filterService } = gamesService;
  const { $rating, $genres, $network } = filterService;

  return [
    // { title: 'Ctrl + K to search games', children: <PlayingStatus /> },
    {
      title: 'Game Platform',
      children: <GameSidebarPlatform />,
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Min Rating',
      children: (
        <SidebarSlider
          min={0}
          max={5}
          onChange={(value) => $rating.next(value)}
        />
      ),
    },
    {
      title: 'Genres',
      children: (
        <SidebarItemForListView
          data={map(gameGenre, (item) => item)}
          $validateData={$genres}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Network',
      children: (
        <SidebarItemForListView
          data={map(gameNetwork, (item) => item)}
          $validateData={$network}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
  ];
};