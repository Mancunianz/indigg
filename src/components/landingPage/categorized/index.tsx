'use client';
import Grid2 from '@mui/material/Unstable_Grid2';
import CategorizedColumn, {
  CategorizedColumnProps,
} from 'components/landingPage/categorized/categorizedColumn';
import { categorizedColumnData } from '@/src/store/categorized';
import { map } from 'lodash';
import ProductSection from '@cc/productSection';
import { Box } from '@mui/material';

const Categorized = () => {
  const columnData: (Pick<
    CategorizedColumnProps['sectionHeaderProps']['data'],
    'title' | 'type'
  > &
    Pick<CategorizedColumnProps, 'data'>)[] = [
    { title: 'New', type: 'Released', data: categorizedColumnData },
    { title: 'Top', type: 'Played', data: categorizedColumnData },
    {
      title: 'Coming',
      type: 'Soon',
      data: categorizedColumnData,
    },
  ];
  return (
    <ProductSection variant={'BROWSE'} pt={0}>
      <Box width={1} px={10}>
        <Grid2
          container
          columnSpacing={4}
          rowSpacing={10}
          width={1}
          gridColumn={'auto'}
          justifyContent={'space-between'}
        >
          {map(columnData, (column, index) => {
            const { title, type, data } = column;
            return (
              <Grid2 key={index}>
                <CategorizedColumn
                  sectionHeaderProps={{
                    data: {
                      title,
                      type,
                    },
                  }}
                  data={data}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </ProductSection>
  );
};

export default Categorized;