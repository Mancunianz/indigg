'use client';
import ProductSection from '@/src/customComponents/productSection';
import { map } from 'lodash';
import QuestCard from '@/src/customComponents/productSection/featured/questCard';
import { quests } from 'store/product/quest';
import MLink from '@cc/mLink';

const FeaturedQuests = () => {
  return (
    <ProductSection
      variant={'FEATURED'}
      HeaderProps={{
        data: {
          type: 'Quests',
          title: 'Featured',
          action: (
            <MLink href={'/quests'} variant={'contained'}>
              All Quests
            </MLink>
          ),
        },
      }}
    >
      {map(quests, (game, index) => {
        return (
          <QuestCard
            key={index}
            data={game}
            sx={{ flexShrink: 0, flexGrow: 0, flexBasis: 'auto' }}
          />
        );
      })}
    </ProductSection>
  );
};

export default FeaturedQuests;