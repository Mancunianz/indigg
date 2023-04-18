import MLink, { MLinkProps } from '@cc/mLink';
import Image, { StaticImageData } from 'next/image';
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { textEllipsis } from '@/src/utils';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';
import { isArray } from 'lodash';

export interface CategorizedCardProps {
  data: {
    title: string;
    description: string;
    avatar: string | StaticImageData;
    tag: string;
    href: MLinkProps['href'];
  };
}

const CategorizedCard = (props: CategorizedCardProps) => {
  const { data } = props;
  const { title, description, avatar, tag, href } = data;
  return (
    <Card
      sx={[
        cardSx,
        ...(isArray(cardAnimationSx) ? cardAnimationSx : [cardAnimationSx]),
        { '&:hover': { transform: 'none', background: 'initial' } },
      ]}
    >
      <CardMedia>
        <Avatar sx={avatarSx}>
          <Image
            src={avatar}
            width={152}
            height={134}
            alt={title}
            style={{
              objectFit: 'cover',
            }}
          />
        </Avatar>
      </CardMedia>
      <Stack justifyContent={'space-between'}>
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'overline',
            paragraph: true,
            component: 'h3',
            fontWeight: 600,
            lineHeight: 1,
            mb: 0.5,
          }}
          subheader={description}
          subheaderTypographyProps={{
            variant: 'body2',
            sx: {
              lineHeight: 1.4,
              ...textEllipsis(2),
            },
          }}
          sx={{ py: 0 }}
        />
        <CardActions sx={cardActionSx}>
          <Typography variant={'body2'} color={'#9CA0B5'} mb={0.5}>
            {tag}
          </Typography>
          <MLink
            href={href}
            variant={'contained'}
            sx={{
              height: 34,
              width: 62,
              px: 0,
              fontSize: 14,
            }}
          >
            Play
          </MLink>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default CategorizedCard;
const cardSx: SxProps<Theme> = () => {
  return {
    display: 'flex',
    width: 445,
    height: 134,
  };
};
const avatarSx: SxProps<Theme> = () => {
  return {
    width: 152,
    height: 132,
    borderRadius: 2.5,
  };
};
const cardActionSx: SxProps<Theme> = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    px: 2,
    py: 0,
  };
};