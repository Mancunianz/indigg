import { LeaderBoardSectionProps } from '@cc/leaderboard';

export const questLeaderboardColumns: LeaderBoardSectionProps<ClanRowData>['columns'] =
  [
    {
      id: 'quest',
      label: 'Quest',
      align: 'center',
    },
    {
      id: 'platform',
      label: 'Platform',
    },
    {
      id: 'chain',
      label: 'Chain',
    },
    {
      id: 'reward',
      label: 'Reward',
    },
    {
      id: 'spots',
      label: 'Spots',
    },
  ];

export type ClanRowData = {
  quest: { name: string; avatar: string; lastActive: string };
  platform: number | string;
  chain: number | string;
  reward: number | string;
  spots: number | string;
};

const createRowData = (data: ClanRowData): ClanRowData => {
  const { quest, platform, chain, reward, spots } = data;
  return {
    quest,
    platform,
    chain,
    reward,
    spots,
  };
};
export const questLeaderboardRows: LeaderBoardSectionProps<ClanRowData>['rows'] =
  [
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
    createRowData({
      quest: {
        name: 'Red Devils',
        lastActive: 'Last active 4 hours ago',
        avatar: '',
      },
      platform: 'PC, Xbox ',
      chain: 'Solo',
      reward: '$100 and a sword',
      spots: 5,
    }),
  ];