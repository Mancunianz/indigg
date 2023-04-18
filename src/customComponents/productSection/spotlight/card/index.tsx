import {
  Card,
  CardContent,
  CardMedia,
  CardProps,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import MLink, { MLinkProps } from '@/src/customComponents/mLink';
import { isArray } from 'lodash';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';

export interface HighlightCardProps extends Omit<CardProps, 'children'> {
  data: {
    banner: string | StaticImageData;
    href: MLinkProps['href'];
    title: string;
    description: string;
  };
}

const HighlightCard = (props: HighlightCardProps) => {
  const { data, ...cardProps } = props;
  const { banner, href, title, description } = data;
  const { sx, ...restCardProps } = cardProps;
  return (
    <Card
      sx={[spotlightCardSx, ...(isArray(sx) ? sx : [sx])]}
      {...restCardProps}
    >
      <MLink
        href={href}
        variant={'text'}
        disableRipple
        sx={{ width: 1, mb: 3.75, opacity: 1 }}
      >
        <CardMedia
          sx={[
            ...(isArray(cardAnimationSx) ? cardAnimationSx : [cardAnimationSx]),
            {
              width: 1,
              height: { xs: '165px', lg:'265px', xxl: '355px' },
              borderRadius: { xs: 3, lg: 6.5 },
              '&:hover': {
                transform: 'none',
              },
            },
          ]}
        >
          <Image src={banner} alt={title} fill />
        </CardMedia>
      </MLink>
      <CardContent sx={{ p: 0, fontWeight: 500 }}>
        <Typography
          variant={'h4'}
          component={'h3'}
          lineHeight={'140%'}
          fontWeight={'inherit'}
          mb={0.5}
        >
          {title}
        </Typography>
        <Typography
          variant={'overline'}
          paragraph
          component={'p'}
          lineHeight={'120%'}
          fontWeight={'inherit'}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;

const spotlightCardSx: SxProps<Theme> = {
  width: { xs: '280px', sm_md: '45%' },
  height: 'fit-content',
  boxShadow: 'none',
  background: 'transparent',
  overflow: 'hidden',
};
