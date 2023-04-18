import { socialFeedbacks } from '@/src/store/social';
import SocialFeedbackCard from '@c/productsPage/detailsPage/layout/social/feedbackCard';
import { Box, Divider, List, ListItem, Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';
import { forwardRef, SyntheticEvent, useState } from 'react';
import { map } from 'lodash';
import { TabContext, TabList } from '@mui/lab';
import { TabPanel } from '@nm/@mui/lab';
import { Tab } from '@nm/@mui/material';
import { Reddit, SvgIconComponent, Twitter } from '@mui/icons-material';

export const socialTabs: {
  label: string;
  icon: SvgIconComponent;
}[] = [
  { label: 'Twitter', icon: Twitter },
  {
    label: 'Reddit',
    icon: Reddit,
  },
];
const SocialFeedback = () => {
  const [activeTab, setActiveTab] = useState(socialTabs[0].label);
  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };
  return (
    <TabContext value={activeTab}>
      <Box bgcolor={backgroundColor} py={4.25}>
        <TabList
          onChange={handleTabChange}
          sx={{ height: 36, px: 5.25 }}
          TabIndicatorProps={{
            sx: {
              bgcolor: 'info.main',
            },
          }}
        >
          {map(socialTabs, (value, index) => {
            const { icon: Icon, label } = value;
            return (
              <Tab
                key={index}
                value={label}
                label={
                  <Typography
                    variant={'overline'}
                    component={'span'}
                    paragraph
                    mb={0}
                    fontWeight={700}
                  >
                    {label}
                  </Typography>
                }
                icon={<Icon />}
                iconPosition={'start'}
                sx={{
                  border: 'none',
                }}
              />
            );
          })}
        </TabList>

        {map(socialTabs, (value, index) => {
          const { label } = value;
          return (
            <TabPanel key={index} value={label} sx={{ p: 0, pt: 6 }}>
              <FixedSizeList
                height={250 * 3}
                width={'100%'}
                itemSize={250}
                itemCount={socialFeedbacks.length}
                itemData={socialFeedbacks}
                innerElementType={innerElementType}
              >
                {({ index, style, data: arr }) => {
                  const item = arr[index];
                  return (
                    <ListItem
                      key={index}
                      style={style}
                      disableGutters
                      disablePadding
                      sx={{
                        position: 'relative',
                      }}
                    >
                      <SocialFeedbackCard
                        data={item}
                        sx={{
                          height: 250,
                          maxHeight: 250,
                          backgroundColor,
                        }}
                      />
                      {index < arr.length - 1 && (
                        <Divider
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 32,
                            right: 32,
                            opacity: 0.25,
                            borderWidth: 1.5,
                          }}
                        />
                      )}
                    </ListItem>
                  );
                }}
              </FixedSizeList>
            </TabPanel>
          );
        })}
      </Box>
    </TabContext>
  );
};

export default SocialFeedback;

const backgroundColor = '#212121';
const innerElementType = forwardRef((props: any, ref) => {
  return (
    <List
      disablePadding
      ref={ref}
      {...props}
      sx={{
        backgroundColor,
      }}
    />
  );
});
innerElementType.displayName = innerElementType.name;