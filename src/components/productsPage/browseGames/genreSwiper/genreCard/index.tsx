import {
  Card,
  CardActionArea,
  CardMedia,
  CardProps,
  Stack,
  SxProps,
  Theme,
  Typography,
  TypographyProps,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { isArray } from 'lodash';
import { GameGenre } from '@/src/commomTypes';
import useGame from '@rs/game/game.hook';
import { useObservable } from 'react-use';
import { useMemo } from 'react';

export interface GenreCardProps extends Omit<CardProps, 'children'> {
  data: {
    image: string | StaticImageData;
    title: Capitalize<GameGenre>;
    TitleTypographyProps?: Omit<TypographyProps, 'children'>;
  };
}

const GenreCard = (props: GenreCardProps) => {
  const { data, ...cardProps } = props;
  const { sx: cardSxProp, ...restCardProps } = cardProps;
  const { image, title, TitleTypographyProps } = data;
  const { filterService } = useGame();
  const { $genres } = filterService;
  const genres = useObservable($genres, $genres.value);
  const isActive = useMemo(() => genres.includes(title), [genres, title]);

  return (
    <Card
      sx={[cardSx, ...(isArray(cardSxProp) ? cardSxProp : [cardSxProp])]}
      component={Stack}
      onClick={() => $genres.next(genres.includes(title) ? [] : [title])}
      {...restCardProps}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: isActive
                ? 'transparent'
                : 'linear-gradient(180deg, rgba(53, 49, 77, 0.26) 69.37%, #201D1D 100%)',
            },
          }}
        >
          <Image
            src={image}
            width={310}
            height={220}
            alt={title}
            style={{
              objectFit: 'cover',
            }}
          />
        </CardMedia>
        <Typography
          variant={'h2'}
          {...TitleTypographyProps}
          fontWeight={600}
          sx={[
            titleSx(isActive),
            ...(TitleTypographyProps
              ? isArray(TitleTypographyProps?.sx)
                ? TitleTypographyProps?.sx
                : [TitleTypographyProps?.sx]
              : []),
          ]}
        >
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default GenreCard;

const cardSx: SxProps<Theme> = {
  width: 310,
  height: 220,
  borderRadius: 3.25,
  alignItems: 'center',
  overflow: 'hidden',
};
const titleSx = (isActive: boolean): SxProps<Theme> => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  textShadow: '0px 4px 2px rgba(0, 0, 0, 0.8)',
  background: !isActive
    ? 'transparent'
    : 'linear-gradient(180deg, rgba(53, 49, 77, 0.66) 69.37%, #201D1D 100%)',
  alignSelf: 'center',
});