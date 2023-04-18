'use client';
import SwiperSection from '@cc/swiperSection';
import SectionHeader from '@cc/productSection/subComponent/sectionHeader';
import SwiperNavigation, {
  swiperNavigation,
} from '@cc/swiperSection/swiperNavigation';
import { Navigation } from '@nm/swiper';
import { map } from 'lodash';
import GameCard, { GameCardProps } from '@cc/productSection/featured/gameCard';

interface RelatedGamesSwiperProps {
  data: GameCardProps['data'][];
}

const RelatedGamesSwiper = (props: RelatedGamesSwiperProps) => {
  const { data } = props;
  return (
    <SwiperSection
      variant={'RELATED'}
      ContainerProps={{
        sx: {
          '& .swiper-slide': {
            marginRight: 2,
            '&:last-of-type': {
              marginRight: 0,
            },
          },
        },
      }}
      SwiperSlots={{
        SwiperContainerStartSlot: (
          <SectionHeader
            data={{
              title: 'Related',
              type: 'Games',
              action: <SwiperNavigation />,
            }}
          />
        ),
        SwiperContainerStartSlotProps: {
          sx: {
            mb: 6.5,
          },
        },
      }}
      SwiperProps={{
        slidesPerView: 'auto',
        modules: [Navigation],
        style: {
          width: '100%',
        },
        navigation: {
          enabled: true,
          prevEl: `.${swiperNavigation.prevButtonClass}`,
          nextEl: `.${swiperNavigation.nextButtonClass}`,
        },
      }}
      SwiperSlideChildren={map(data, (value, index) => {
        return <GameCard data={value} key={index} />;
      })}
      SwiperSlideProps={{
        style: {
          width: 'auto',
        },
      }}
    />
  );
};

export default RelatedGamesSwiper;