'use client';
import { List, ListItem } from '@mui/material';
import SidebarItem, { SidebarItemProps } from '@cc/sidebar/sidebarItem';
import { sidebarCommonSx } from '@cc/sidebar/constant';
import { isArray, map } from 'lodash';
import SidebarItemForListView from '@cc/sidebar/sidebarItemForListView';
import SidebarSlider from '@cc/sidebar/sidebarSlider';
import useClan from '@rs/clan/clan.hook';
import { ClanService } from '@rs/clan/clan.service';
import { clanLanguages, clanStatus, clanTimeZone } from '@cc/constant.server';

const ClanSidebar = () => {
  const clanService = useClan();

  return (
    <List
      disablePadding
      sx={[...(isArray(sidebarCommonSx) ? sidebarCommonSx : [sidebarCommonSx])]}
    >
      {map(sidebarItems(clanService), (item, index) => {
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

export default ClanSidebar;

const sidebarItems = (clanService: ClanService): SidebarItemProps[] => {
  const { filterService } = clanService;
  const { $status, $languages, $timeZone, $rating } = filterService;
  return [
    // { title: 'Ctrl + K to search games', children: <PlayingStatus /> },
    {
      title: 'Clans Activity',
      children: (
        <SidebarItemForListView
          data={map(clanStatus, (i) => i)}
          $validateData={$status}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Language',
      children: (
        <SidebarItemForListView
          data={map(clanLanguages, (i) => i)}
          $validateData={$languages}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Time Zone',
      children: (
        <SidebarItemForListView
          data={map(clanTimeZone, (i) => i)}
          isUpperCase
          $validateData={$timeZone}
        />
      ),
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
  ];
};