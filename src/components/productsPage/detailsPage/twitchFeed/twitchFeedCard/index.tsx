import { Avatar, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { SxProps, Theme } from '@nm/@mui/material';
import { isArray } from 'lodash';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';
import { textEllipsis } from '@/src/utils';

export interface TwitchFeedCardProps {
  data: {
    title: string;
    banner: string | StaticImageData;
    avatar: string | StaticImageData;
    tag1: string;
    tag2: string;
  };
}

const TwitchFeedCard = (props: TwitchFeedCardProps) => {
  const { data } = props;
  const { title, banner, avatar, tag1, tag2 } = data;
  return (
    <Card
      sx={[
        cardSx,
        ...(isArray(cardAnimationSx) ? cardAnimationSx : [cardAnimationSx]),
      ]}
    >
      <CardMedia
        sx={{
          width: '100%',
          height: 232,
          overflow: 'hidden',
          borderRadius: 'inherit',
        }}
      >
        <Image
          src={banner}
          alt={title}
          width={362}
          height={232}
          style={{
            objectFit: 'cover',
          }}
        />
      </CardMedia>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: 42,
              height: 42,
            }}
          >
            <Image src={avatar} alt={title} width={42} height={42} />
          </Avatar>
        }
        title={title}
        titleTypographyProps={{
          variant: 'overline',
          paragraph: true,
          component: 'h3',
          fontWeight: 600,
          mb: 1,
          sx: {
            ...textEllipsis(1),
          },
        }}
        subheader={
          <>
            <Typography variant={'inherit'} color={'text.secondary'}>
              {tag1}
            </Typography>
            <Typography variant={'inherit'} color={'text.subtitle'}>
              {tag2}
            </Typography>
          </>
        }
        subheaderTypographyProps={{
          direction: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          variant: 'body2',
          fontWeight: 500,
          width: 0.9,
          color: 'text.secondary',
        }}
        sx={{
          alignItems: 'flex-start',
        }}
      />
    </Card>
  );
};

export default TwitchFeedCard;

const cardSx: SxProps<Theme> = () => {
  return {
    width: 362,
    height: 322,
  };
};