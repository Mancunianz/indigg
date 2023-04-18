'use client';
import { List, ListItem } from '@mui/material';
import SidebarItem, { SidebarItemProps } from '@cc/sidebar/sidebarItem';
import { sidebarCommonSx } from '@cc/sidebar/constant';
import { isArray, map } from 'lodash';
import SidebarItemForListView from '@cc/sidebar/sidebarItemForListView';
import { questDifficulty, questTime, questTypes } from '@cc/constant.server';
import { QuestService } from '@rs/quest/quest.service';
import useQuest from '@rs/quest/quest.hook';

const QuestSidebar = () => {
  const questService = useQuest();
  return (
    <List
      disablePadding
      sx={[...(isArray(sidebarCommonSx) ? sidebarCommonSx : [sidebarCommonSx])]}
    >
      {map(sidebarItems(questService), (item, index) => {
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

export default QuestSidebar;

const sidebarItems = (questService: QuestService): SidebarItemProps[] => {
  const { filterService } = questService;
  const { $difficulty, $timeRequires, $types } = filterService;
  return [
    // { title: 'Ctrl + K to search games', children: <PlayingStatus /> },
    {
      title: 'Difficulty level',
      children: (
        <SidebarItemForListView
          data={map(questDifficulty, (i) => i)}
          $validateData={$difficulty}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Time required',
      children: (
        <SidebarItemForListView
          data={map(questTime, (i) => i)}
          $validateData={$timeRequires}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
    {
      title: 'Quest Type',
      children: (
        <SidebarItemForListView
          data={map(questTypes, (i) => i)}
          $validateData={$types}
        />
      ),
      disablePadding: true,
      disableGutters: true,
    },
  ];
};