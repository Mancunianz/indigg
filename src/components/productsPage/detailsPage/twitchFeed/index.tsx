import SwiperSection from '@cc/swiperSection';
import TwitchFeedCard, {
  TwitchFeedCardProps,
} from '@c/productsPage/detailsPage/twitchFeed/twitchFeedCard';
import { map } from 'lodash';
import SectionHeader from '@cc/productSection/subComponent/sectionHeader';
import SwiperNavigation, {
  swiperNavigation,
} from '@cc/swiperSection/swiperNavigation';
import { Navigation } from '@nm/swiper';

export interface TwitchFeedProps {
  data: TwitchFeedCardProps['data'][];
}

const TwitchFeed = (props: TwitchFeedProps) => {
  const { data } = props;
  return (
    <SwiperSection
      variant={'BROWSE'}
      pb={0}
      ContainerProps={{
        sx: {
          '& .swiper-slide': {
            marginRight: 6.5,
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
              type: 'Feed',
              title: 'Twitch',
              action: <SwiperNavigation />,
            }}
          />
        ),
        SwiperContainerStartSlotProps: {
          sx: {
            mb: 10,
          },
        },
      }}
      SwiperProps={{
        slidesPerView: 'auto',
        modules: [Navigation],
        navigation: {
          enabled: true,
          prevEl: `.${swiperNavigation.prevButtonClass}`,
          nextEl: `.${swiperNavigation.nextButtonClass}`,
        },
      }}
      SwiperSlideProps={{
        style: {
          width: 'auto',
        },
      }}
      SwiperSlideChildren={map(data, (item, index) => {
        return <TwitchFeedCard key={index} data={item} />;
      })}
    />
  );
};

export default TwitchFeed;