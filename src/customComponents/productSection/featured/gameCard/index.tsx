import {
  alpha,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Divider,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import MLink, { MLinkProps } from '@/src/customComponents/mLink';
import { debounce, isArray, isNumber, join, map, uniq } from 'lodash';
import { StarRateRounded } from '@mui/icons-material';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Count, GameGenre, GameNetwork, Platform } from '@/src/commomTypes';
import PlatformIcon from '@/src/customComponents/platformIcons';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';
import { getCount } from '@/src/utils';
import ReactPlayer from '@nm/react-player';
import { useHoverDirty } from 'react-use';

export interface GameCardProps extends Omit<CardProps, 'children'> {
  data: {
    banner: string | StaticImageData;
    id: string | number;
    title: Capitalize<string>;
    rating: Count;
    platforms: Platform[];
    genre: Capitalize<GameGenre>[];
    network: Capitalize<GameNetwork>[];
    href: MLinkProps['href'];
  };
  isVideo?: boolean;
}

const GameCard = (props: GameCardProps) => {
  const { data, isVideo, ...cardProps } = props;
  const { sx, ...restCardProps } = cardProps;
  const { banner, title, genre, platforms, rating } = data;
  const cardRef = useRef(null);
  const cardMediaRef = useRef(null);
  const isCardHover = useHoverDirty(cardMediaRef);
  const [isVideoPlay, setIsVideoPlay] = useState(false);

  const setVideoPlayWithDebounce = debounce(() => {
    setIsVideoPlay(true);
  }, 500);
  useEffect(() => {
    isCardHover ? setVideoPlayWithDebounce() : setIsVideoPlay(false);
  }, [isCardHover]);

  return (
    <Card
      ref={cardRef}
      sx={[cardAnimationSx, featureCardSx, ...(isArray(sx) ? sx : [sx])]}
      {...restCardProps}
    >
      <CardMedia
        ref={cardMediaRef}
        sx={[
          {
            width: 1,
            height: '410px',
            position: 'absolute',
            border: '1px solid #000000',
            bgcolor: 'common.black',
            borderRadius: 'inherit',
            boxShadow: isVideo && isVideoPlay ? '0px 0px 40px 40px black' : 'none',
            overflow: 'clip',
            transition: 'all 0.3s ease-in-out',
          },
          isVideo
            ? {
                '&:hover': {
                  overflow: 'visible',
                  width: 304 * 2,
                  height: 1,
                  top: 0,
                  bottom: 0,
                  zIndex: 10,
                },
              }
            : {},
        ]}
      >
        {isVideo && isVideoPlay ? (
          <ReactPlayer
            url={'https://youtu.be/NbEPJAeDStI'}
            muted
            stopOnUnmount
            width={'100%'}
            height={'536px'}
            wrapper={Fragment}
            playing={isVideoPlay}
            config={{
              youtube: {
                playerVars: { showinfo: 0 },
              },
            }}
          />
        ) : (
          <Image
            src={banner}
            alt={title}
            width={304}
            height={410}
            placeholder={'blur'}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        )}
        <Typography variant={'h3'} sx={ratingSx}>
          {isNumber(rating) ? rating.toPrecision(2) : getCount(rating)}
          <StarRateRounded
            sx={{
              color: '#F5E01F',
              fontSize: '3rem',
            }}
          />
        </Typography>
      </CardMedia>
      <Stack sx={cardContentWrapperSx}>
        <CardContent sx={{ height: 72 }}>
          <Typography variant={'body1'} lineHeight={'110%'}>
            {title}
          </Typography>
          <Typography variant={'caption'}>{join(genre, ', ')}</Typography>
        </CardContent>
        <Divider
          variant={'middle'}
          sx={{
            border: 'none',
            height: '1px',
            opacity: 0.15,
            backgroundImage: ({
              palette: {
                common: { white },
              },
            }) =>
              `linear-gradient(90deg, ${white} -6.38%, ${alpha(
                white,
                0,
              )} 100%)`,
          }}
        />
        <CardActions
          sx={{
            px: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Stack direction={'row'} spacing={1.25}>
            {map(uniq(platforms), (platform, index) => {
              return (
                <PlatformIcon
                  key={index}
                  platform={platform}
                  isHover
                  hoverRef={cardRef}
                />
              );
            })}
          </Stack>
          <MLink
            href={`/games/${title.split(' ').join('-')}`}
            variant={'contained'}
            sx={{ height: 32, width: 62, p: 0, backgroundColor: '#63019E' }}
          >
            <Typography variant={'subtitle1'} component={'span'}>
              Play
            </Typography>
          </MLink>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default GameCard;

const featureCardSx: SxProps<Theme> = () => {
  return {
    width: 304,
    height: 536,
    '&:hover': {
      overflow: 'visible',
      zIndex: 999999,
    },
  };
};
const ratingSx: SxProps<Theme> = {
  position: 'absolute',
  top: 5,
  right: 5,
  display: 'flex',
  alignItems: 'flex-start',
};
const cardContentWrapperSx: SxProps<Theme> = {
  borderRadius: 'inherit',
  border: '1px solid',
  borderColor: alpha('#3F5EFB', 0.2),
  height: 1,
  justifyContent: 'flex-end',
  px: 0.5,
};