import { activities } from '@/src/store/activity';
import ActivityCard from '@c/productsPage/detailsPage/layout/activity/activityCard';
import { FixedSizeList } from 'react-window';
import { ListItem } from '@mui/material';

const Activity = () => {
  return (
    <FixedSizeList
      itemCount={activities.length}
      itemSize={116}
      height={116 * 5 - 8}
      width={'100%'}
      itemData={activities}
      innerElementType={'ul'}
    >
      {({ index, style, data }) => {
        return (
          <ListItem key={index} style={style} disableGutters>
            <ActivityCard data={data[index]} />
          </ListItem>
        );
      }}
    </FixedSizeList>
  );
};

export default Activity;