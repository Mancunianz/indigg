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
import { MLinkProps } from '@/src/customComponents/mLink';
import { isArray, map } from 'lodash';
import {
  Count,
  QuestDifficulty,
  QuestTag,
  QuestTime,
  QuestType,
} from '@/src/commomTypes';
import { MonetizationOn, ThumbUpAltOutlined } from '@mui/icons-material';
import { cardAnimationSx } from '@cc/productSection/featured/common_cardSx';
import SlotIcon from '@cc/icons/slotIcon';
import StepIcon from '@cc/icons/stepIcon';
import { getCount } from '@/src/utils';

export interface QuestCardProps extends Omit<CardProps, 'children'> {
  data: {
    banner: string | StaticImageData;
    id: string | number;
    title: Capitalize<string>;
    tag: Capitalize<QuestTag>;
    type: Capitalize<QuestType>;
    likes: Count;
    rewards: Count;
    steps: Count;
    slots: Count;
    difficulty: QuestDifficulty;
    timeInMin: QuestTime;
    href: MLinkProps['href'];
  };
}

const QuestCard = (props: QuestCardProps) => {
  const { data, ...cardProps } = props;
  const { sx, ...restCardProps } = cardProps;
  const { banner, title, tag, likes, rewards, steps, slots } = data;

  const rewardStepsSlots = [
    {
      icon: MonetizationOn,
      label: `Reward USD ${getCount(rewards)}$`,
    },
    {
      icon: StepIcon,
      label: `Steps ${getCount(steps)}`,
    },
    {
      icon: SlotIcon,
      label: `Slots ${getCount(slots)}`,
    },
  ];

  return (
    <Card
      sx={[featureCardSx, cardAnimationSx, ...(isArray(sx) ? sx : [sx])]}
      {...restCardProps}
    >
      <CardMedia
        sx={{
          width: 1,
          height: '345px',
          overflow: 'clip',
          borderRadius: 'inherit',
        }}
      >
        <Image
          src={banner}
          alt={title}
          width={305}
          height={410}
          placeholder={'blur'}
          style={{
            objectFit: 'cover',
          }}
        />
      </CardMedia>
      <CardContent
        component={Stack}
        alignItems={'flex-start'}
        sx={{
          py: 1.5,
        }}
      >
        <Typography variant={'h6'} component={'span'} fontWeight={600} mb={1}>
          {title}
        </Typography>
        <Stack direction={'row'} width={1} justifyContent={'space-between'}>
          <Stack
            component={Stack}
            direction={'row'}
            columnGap={0.5}
            flexShrink={0}
            width={'fit-content'}
          >
            <ThumbUpAltOutlined />
            <Typography variant={'subtitle1'} component={'span'}>
              {getCount(likes)}
            </Typography>
          </Stack>
          <Typography
            variant={'body2'}
            sx={{
              color: (theme) => alpha(theme.palette.text.primary, 0.8),
            }}
          >
            {tag}
          </Typography>
        </Stack>
      </CardContent>
      <Divider
        flexItem
        variant={'middle'}
        sx={{
          border: 'none',
          height: '1px',
          opacity: 0.3,
          backgroundImage: ({
            palette: {
              info: { main },
            },
          }) => `linear-gradient(116.85deg, #FC466B 0%, ${main} 100%)`,
        }}
      />
      <CardActions
        sx={{
          px: 2,
          py: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          direction={'row'}
          width={1}
          columnGap={2}
          justifyContent={'space-between'}
        >
          {map(rewardStepsSlots, (item, index) => {
            const { label, icon: Icon } = item;
            return (
              <Stack key={index} direction={'row'} columnGap={0.5}>
                <Icon />
                <Typography
                  variant={'subtitle1'}
                  component={'h2'}
                  fontWeight={500}
                >
                  {label}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default QuestCard;

const featureCardSx: SxProps<Theme> = () => {
  return {
    width: 296,
    height: 502,
    border: '1px solid',
    borderColor: alpha('#3F5EFB', 0.2),
  };
};