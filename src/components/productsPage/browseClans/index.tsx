'use client';
import ProductSection from '@/src/customComponents/productSection';
import Grid2 from '@mui/material/Unstable_Grid2';
import { map } from 'lodash';
import { clans } from 'store/product/clan';
import ClanCard from '@/src/customComponents/productSection/featured/clanCard';
import ClanSidebar from '@c/productsPage/browseClans/clanSidebar';
import { Box } from '@mui/material';
import { sidebarCommonSx } from '@cc/sidebar/constant';
import ClanProvider from '@rs/clan';
import { ClanService } from '@rs/clan/clan.service';
import { useRef } from 'react';
import { useObservable } from '@nm/react-use';
import useClan from '@rs/clan/clan.hook';
import { AnimatePresence, motion } from '@nm/framer-motion';
import { filterMotionProps } from '@c/productsPage/common_constants';
import LeaderBoardSection from '@cc/leaderboard';
import { clanLeaderboardColumns, clanLeaderboardRows } from '@/src/store/product/clan/leaderBoard';

const BrowseClans = () => {
  const clanServiceRef = useRef(new ClanService(clans));
  return (
    <ClanProvider value={clanServiceRef.current}>
      <ProductSection
        variant={'BROWSE'}
        HeaderProps={{
          data: {
            type: 'Clans',
            title: 'Top performing',
          },
        }}
        sidebar={<ClanSidebar />}
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
          data:{
            type: 'Leaderboard',
            title: 'Clan',
          }
        }}
        columns={clanLeaderboardColumns}
        rows={clanLeaderboardRows}
      />
      <ProductSection
        variant={'BROWSE'}
        HeaderProps={{
          data: {
            type: 'Clans',
            title: 'Other',
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
    </ClanProvider>
  );
};

export default BrowseClans;

const FilteredClanItem = () => {
  const { $clan, filterService } = useClan();
  const { $filteredClans } = filterService;
  const clans = useObservable($filteredClans, $clan.value);
  return (
    <>
      {map(clans, (clan) => {
        const { id } = clan;
        return (
          <Grid2 key={id} component={motion.div} layout {...filterMotionProps}>
            <ClanCard data={clan} />
          </Grid2>
        );
      })}
    </>
  );
};
