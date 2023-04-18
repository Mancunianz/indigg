import {
  Box,
  Divider,
  Stack,
  StackProps,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { StaticImageData } from 'next/image';
import MLink, { MLinkProps } from '@cc/mLink';
import { isArray, isNumber, isString, map } from 'lodash';
import { StarRateRounded } from '@mui/icons-material';

// Images
import { Count } from '@/src/commomTypes';

export interface SlideCardProps extends Omit<StackProps, 'children'> {
  data: {
    title: string;
    rating: number;
    banner: string | StaticImageData;
    description: string;
    reviews: number | Count;
    links: [
      {
        name: string;
        href: MLinkProps['href'];
      },
      {
        name: string;
        href: MLinkProps['href'];
      },
    ];
  };
  index: number;
}

const SlideCard = (props: SlideCardProps) => {
  const { data, index, ...restBoxProps } = props;
  const { sx, ...restProps } = restBoxProps;
  const { banner, title, rating, reviews, description, links } = data;
  const isFirstElement = index === 0;

  return (
    <Stack
      sx={[
        slideBoxSx,
        ...(isArray(sx) ? sx : [sx]),
        {
          backgroundImage: `linear-gradient(223.64deg, rgba(0, 0, 0, 0) 25.6%, rgba(0, 0, 0, 0.44) 64.9%) ,url(${
            isString(banner) ? banner : banner.src
          }), ${
            isString(banner) ? 'secondary.main' : `url(${banner.blurDataURL})`
          }`,
        },
      ]}
      {...restProps}
    >
      <Box width={{ xs: '100%', lg: 0.65 }}>
        <Typography
          variant={'h1'}
          component={isFirstElement ? 'h1' : 'h2'}
          mb={0.2}
          lineHeight={'105%'}
        >
          {title}
        </Typography>
        <Box mb={1.5}>
          <Stack direction={'row'} alignItems={'center'} columnGap={1}>
            <Typography
              variant={'h5'}
              component={'p'}
              fontWeight={600}
              display={'flex'}
              lineHeight={'100%'}
              alignItems={'center'}
              noWrap
            >
              {rating}.0
              <StarRateRounded fontSize={'large'} sx={{ color: '#F5E01F' }} />
            </Typography>
            <Divider
              orientation={'vertical'}
              flexItem
              variant={'middle'}
              sx={{
                height: '25px',
                alignSelf: 'center',
                background: '#FFFFFF',
              }}
            />
            <Typography
              fontWeight={600}
              variant={'h5'}
              component={'p'}
              lineHeight={'100%'}
              noWrap
            >
              {isNumber(reviews) ? reviews : reviews.count + reviews.type}{' '}
              reviews
            </Typography>
          </Stack>
          <Typography variant={'overline'} paragraph fontWeight={500}>
            {description}
          </Typography>
        </Box>
        <Stack direction={'row'} columnGap={1} height={'42px'}>
          {map(links, (link, index) => {
            const { name, href } = link;
            const to = isString(href) ? href : href.href;
            return to ? (
              <MLink
                key={index}
                href={to}
                variant={'contained'}
                color={!(index % 2) ? 'secondary' : 'primary'}
              >
                {name}
              </MLink>
            ) : null;
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default SlideCard;

const slideBoxSx: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  height: '732px',
  justifyContent: 'flex-end',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 2,
  overflow: 'hidden',
  px: { xs: 4, lg: 9.75 },
  py: { xs: 4.125, lg:8.125}
};
