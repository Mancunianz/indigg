'use client';
import ProductSection from '@/src/customComponents/productSection';
import { map } from 'lodash';
import HighlightCard from '@/src/customComponents/productSection/spotlight/card';
import { alpha, Typography } from '@mui/material';
import MLink from '@/src/customComponents/mLink';
import { spotlightGames } from '@/src/store/product/game';

const SpotlightGames = () => {
  return (
    <ProductSection
      variant={'SPOTLIGHT'}
      HeaderProps={{
        data: {
          type: 'Games',
          title: 'Spotlight',
          action: <SpotlightAction />,
        },
      }}
      borderRadius={6.5}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'background.paper'}
    >
      {map(spotlightGames, (game, index) => {
        return <HighlightCard key={index} data={game} />;
      })}
    </ProductSection>
  );
};

export default SpotlightGames;

const SpotlightAction = () => {
  return (
    <MLink
      href={'/'}
      variant={'contained'}
      color={'primary'}
      sx={{
        height: 42,
        // padding: { xs: '5px 14px', lg: '6px 16px' },
        fontSize: { xs: '12px', lg: '16px' },
      }}
    >
      <Typography variant={'subtitle1'} component={'span'}>
        View All
      </Typography>
    </MLink>
  );
};
