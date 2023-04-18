import { LeaderBoardSectionProps } from '@cc/leaderboard';
import { isNumber } from 'lodash';

export const clanLeaderboardColumns: LeaderBoardSectionProps<ClanRowData>['columns'] =
  [
    {
      id: 'clan',
      label: 'Clan',
      align: 'center',
    },
    {
      id: 'members',
      label: 'Members',
    },
    {
      id: 'quests',
      label: 'Quests',
    },
    {
      id: 'tournaments',
      label: 'Tournaments',
    },
    {
      id: 'earnings',
      label: 'Earnings',
    },
  ];

export type ClanRowData = {
  clan: { name: string; avatar: string; lastActive: string };
  members: number|string;
  quests: number|string;
  tournaments: number|string;
  earnings: number|string;
};

const createRowData = (data: ClanRowData): ClanRowData => {
  const { clan, members, quests, tournaments, earnings } = data;
  return {
    clan,
    members,
    quests: isNumber(quests) ? `~${quests}/Day` : quests,
    tournaments: isNumber(tournaments) ? `~${tournaments}/Day` : tournaments,
    earnings: isNumber(earnings) ? `USD ${earnings}/day` : earnings,
  };
};
export const clanLeaderboardRows: LeaderBoardSectionProps<ClanRowData>['rows'] =
  [
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      quests: 10,
      earnings: 50,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
    createRowData({
      clan: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      members: 20,
      earnings: 50,
      quests: 10,
      tournaments: 4,
    }),
  ];