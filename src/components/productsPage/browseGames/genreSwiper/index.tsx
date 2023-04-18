import SwiperSection from '@cc/swiperSection';
import { map } from 'lodash';
import GenreCard, {
  GenreCardProps,
} from '@c/productsPage/browseGames/genreSwiper/genreCard';
import SectionHeader from '@cc/productSection/subComponent/sectionHeader';
import { Navigation } from '@nm/swiper';
import SwiperNavigation, {
  swiperNavigation,
} from '@cc/swiperSection/swiperNavigation';
import '@nm/swiper/modules/navigation/navigation.min.css';

export interface GenreSwiperProps {
  data: Omit<GenreCardProps['data'], 'TitleTypographyProps'>[];
}

const GenreSwiper = (props: GenreSwiperProps) => {
  const { data } = props;

  return (
    <SwiperSection
      variant={'BROWSE'}
      pb={0}
      ContainerProps={{
        sx: {
          '& .swiper-slide': {
            marginRight: 1.5,
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
              type: 'Genres',
              title: 'Games',
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
        return <GenreCard key={index} data={item} />;
      })}
    />
  );
};

export default GenreSwiper;