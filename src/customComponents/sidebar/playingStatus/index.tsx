import { Avatar, Stack, SxProps, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import { keys, map } from 'lodash';
import { playingStatus } from '@/src/store/playingStatus';

const PlayingStatus = () => {
  return (
    <Stack rowGap={3.25}>
      {map(keys(playingStatus), (key, index) => {
        const images = playingStatus[key];
        return (
          <Stack key={index} rowGap={3}>
            <Typography variant={'subtitle2'} fontWeight={500}>
              {key}
            </Typography>
            <Stack direction={'row'} columnGap={2.25}>
              {map(images, (image, index) => {
                return (
                  <Avatar key={index} sx={avatarSx}>
                    <Image
                      src={image}
                      alt={key}
                      width={35}
                      height={35}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </Avatar>
                );
              })}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default PlayingStatus;

const avatarSx: SxProps<Theme> = () => {
  return {
    width: 35,
    height: 35,
    borderRadius: 1,
    background: 'transparent',
  };
};