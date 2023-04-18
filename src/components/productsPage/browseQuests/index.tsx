'use client';
import ProductSection from '@/src/customComponents/productSection';
import Grid2 from '@mui/material/Unstable_Grid2';
import { map } from 'lodash';
import { quests } from 'store/product/quest';
import QuestCard from '@/src/customComponents/productSection/featured/questCard';
import QuestSidebar from '@c/productsPage/browseQuests/questSidebar';
import { Box, Divider, Typography } from '@mui/material';
import { sidebarCommonSx } from '@cc/sidebar/constant';
import QuestProvider from '@rs/quest';
import { QuestService } from '@rs/quest/quest.service';
import { Fragment, useRef, useState } from 'react';
import { useObservable } from '@nm/react-use';
import useQuest from '@rs/quest/quest.hook';
import { AnimatePresence, motion } from '@nm/framer-motion';
import { filterMotionProps } from '@c/productsPage/common_constants';
import LeaderBoardSection from '@cc/leaderboard';
import {
  questLeaderboardColumns,
  questLeaderboardRows,
} from '@/src/store/product/quest/leaderBoard';
import Wrapper from '@cc/wrapper';

const panels = ['Quests', 'Tournaments'] as const;

const BrowseQuests = () => {
  const questServiceRef = useRef(new QuestService(quests));
  const [activePanel, setActivePanel] =
    useState<Capitalize<(typeof panels)[number]>>('Quests');

  const handleChangeActivePanel = (panel: typeof activePanel) => {
    setActivePanel(panel);
  };

  return (
    <QuestProvider value={questServiceRef.current}>
      <Wrapper direction={'row'} mb={2} mt={11.5}>
        {map(panels, (panel, index, arr) => {
          const isActive = activePanel === panel;
          return (
            <Fragment key={index}>
              <Typography
                variant={'h2'}
                color={isActive ? 'text.primary' : 'text.caption'}
                onClick={() => handleChangeActivePanel(panel)}
                sx={{
                  cursor: 'pointer',
                }}
              >
                {panel}
              </Typography>
              {index !== arr.length - 1 && (
                <Divider
                  orientation={'vertical'}
                  flexItem
                  variant={'middle'}
                  sx={{
                    mx: 2,
                    borderWidth: 2,
                  }}
                />
              )}
            </Fragment>
          );
        })}
      </Wrapper>
      <ProductSection
        variant={'BROWSE'}
        pt={0}
        rowGap={3.5}
        HeaderProps={{
          data: {
            title: 'My',
            type: activePanel,
            TitleTypographyProps: {
              variant: 'h4',
            },
          },
        }}
        sidebar={<QuestSidebar />}
      >
        <Grid2
          container
          columnSpacing={2}
          rowSpacing={6.5}
          height={'fit-content'}
        >
          <FilteredClanItem />
        </Grid2>
      </ProductSection>
      <LeaderBoardSection
        variant={'BROWSE'}
        HeaderProps={{
          data: {
            type: 'Leaderboard',
            title: 'Quest',
          },
        }}
        columns={questLeaderboardColumns}
        rows={questLeaderboardRows}
      />
      <ProductSection
        variant={'BROWSE'}
        HeaderProps={{
          data: {
            title: 'Other',
            type: 'Quests',
          },
        }}
        sidebar={<Box sx={sidebarCommonSx} />}
      >
        <AnimatePresence>
          <Grid2
            container
            columnSpacing={2}
            rowSpacing={6.5}
            height={'fit-content'}
            component={motion.div}
            layout
          >
            <FilteredClanItem />
          </Grid2>
        </AnimatePresence>
      </ProductSection>
    </QuestProvider>
  );
};

export default BrowseQuests;

const FilteredClanItem = () => {
  const { $quests, filterService } = useQuest();
  const { $filteredQuests } = filterService;
  const quest = useObservable($filteredQuests, $quests.value);
  return (
    <>
      {map(quest, (quest) => {
        const { id } = quest;
        return (
          <Grid2 key={id} component={motion.div} layout {...filterMotionProps}>
            <QuestCard data={quest} />
          </Grid2>
        );
      })}
    </>
  );
};