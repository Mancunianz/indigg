'use client';
import ProductSection from '@/src/customComponents/productSection';
import { map } from 'lodash';
import HighlightCard from '@/src/customComponents/productSection/spotlight/card';
import { Typography } from '@mui/material';
import MLink from '@/src/customComponents/mLink';
import { spotlightClans } from '@/src/store/product/clan';

const SpotlightClans = () => {
  return (
    <ProductSection
      variant={'SPOTLIGHT'}
      HeaderProps={{
        data: {
          type: 'Clans',
          title: 'Spotlight',
          action: <SpotlightAction />,
        },
      }}
      borderRadius={6.5}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'background.paper'}
    >
      {map(spotlightClans, (game, index) => {
        return <HighlightCard key={index} data={game} />;
      })}
    </ProductSection>
  );
};

export default SpotlightClans;

const SpotlightAction = () => {
  return (
    <MLink
      href={'/'}
      variant={'contained'}
      color={'primary'}
      sx={{
        height: 42,
      }}
    >
      <Typography variant={'subtitle1'} component={'span'}>
        View All
      </Typography>
    </MLink>
  );
};