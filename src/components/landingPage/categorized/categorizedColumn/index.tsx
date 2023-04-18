import { List, ListItem } from '@mui/material';
import SectionHeader, {
  SectionHeaderProps,
} from '@cc/productSection/subComponent/sectionHeader';
import { map } from 'lodash';
import CategorizedCard, {
  CategorizedCardProps,
} from '@c/landingPage/categorized/categorizedCard';

export interface CategorizedColumnProps {
  sectionHeaderProps: SectionHeaderProps;
  data: CategorizedCardProps['data'][];
}

const CategorizedColumn = (props: CategorizedColumnProps) => {
  const { sectionHeaderProps, data } = props;
  return (
    <>
      <SectionHeader mb={5} {...sectionHeaderProps} />
      <List>
        {map(data, (item, index) => {
          return (
            <ListItem key={index} disableGutters sx={{ py: 2.25 }}>
              <CategorizedCard data={item} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CategorizedColumn;