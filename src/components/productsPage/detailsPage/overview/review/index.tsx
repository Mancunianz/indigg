'use client';
import SectionHeader from '@cc/productSection/subComponent/sectionHeader';
import MLink from '@cc/mLink';
import { ListItem, Stack } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { reviews } from '@/src/store/product/game/reviews';
import ReviewCard from '@c/productsPage/detailsPage/overview/review/reviewCard';
import { forwardRef } from 'react';
import { List } from '@nm/@mui/material';

const ReviewSection = () => {
  return (
    <Stack my={4} rowGap={3.5}>
      <SectionHeader
        data={{
          title: 'Reviews',
          action: (
            <MLink href={'#'} variant={'contained'}>
              Write a review
            </MLink>
          ),
        }}
      />
      <FixedSizeList
        itemSize={210}
        height={484}
        width={'100%'}
        itemCount={reviews.length}
        itemData={reviews}
        innerElementType={innerElementType}
      >
        {({ index, style, data }) => {
          return (
            <ListItem
              key={index}
              style={style}
              disableGutters
              sx={{
                height: 'fit-content !important',
              }}
            >
              <ReviewCard data={data[index]} />
            </ListItem>
          );
        }}
      </FixedSizeList>
    </Stack>
  );
};

export default ReviewSection;

const innerElementType = forwardRef((props: any, ref) => {
  return <List disablePadding ref={ref} {...props} />;
});
innerElementType.displayName = innerElementType.name;