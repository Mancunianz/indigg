import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  cardHeaderClasses,
  CardProps,
  Divider,
  Typography,
} from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { map } from 'lodash';
import MLink from '@cc/mLink';

// icons
import {
  TwitterCommentIcon,
  TwitterForwardIcon,
  TwitterLinkIcon,
} from '@c/productsPage/detailsPage/layout/social/feedbackCard/twitter_icons';
import { ComponentType } from 'react';

export interface SocialFeedbackCardProps extends Omit<CardProps, 'children'> {
  data: {
    avatar?: string | StaticImageData;
    title: string;
    tags: string[];
    links: string[];
    subheader: string;
    postedAt: string;
    description: string;
    commentCount: number;
    likeCount: number;
    forwardCount: number;
  };
}

const SocialFeedbackCard = (props: SocialFeedbackCardProps) => {
  const { data, ...cardProps } = props;
  const { sx, ...restCardProps } = cardProps;
  const {
    avatar,
    title,
    tags,
    links,
    subheader,
    postedAt,
    description,
    commentCount,
    likeCount,
    forwardCount,
  } = data;

  const titleTag = '#web3gaming';
  const cardActionData: { icon: ComponentType; count: number }[] = [
    {
      icon: TwitterCommentIcon,
      count: commentCount,
    },
    {
      icon: TwitterForwardIcon,
      count: forwardCount,
    },
    {
      icon: TwitterLinkIcon,
      count: likeCount,
    },
  ];
  return (
    <Card elevation={0} sx={sx} {...restCardProps}>
      <CardHeader
        avatar={
          <Avatar
            variant={'circular'}
            sx={{
              border: 'none',
              width: 50,
              height: 50,
              backgroundColor: avatar ? 'transparent' : 'background.paper',
            }}
          >
            {avatar ? (
              <Image
                src={avatar}
                alt={'avatar'}
                width={50}
                height={50}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              title.at(0)
            )}
          </Avatar>
        }
        title={
          <>
            {title}
            <Divider
              orientation={'vertical'}
              variant={'fullWidth'}
              flexItem
              sx={{
                borderColor: 'divider',
                mx: 2,
              }}
            />
            {titleTag}
          </>
        }
        titleTypographyProps={{
          variant: 'body2',
          fontWeight: 500,
          component: 'h3',
          display: 'flex',
        }}
        subheader={`@${subheader}`}
        subheaderTypographyProps={{
          variant: 'body2',
          color: 'text.caption',
          fontWeight: 500,
        }}
        action={
          <Typography variant={'body2'} color={'text.caption'} fontWeight={500}>
            {postedAt}
          </Typography>
        }
        sx={{
          alignItems: 'flex-start',
          [`.${cardHeaderClasses.action}`]: {
            m: 0,
          },
        }}
      />
      <CardContent>
        <Typography variant={'body2'}>
          {description}
          <br />
          {map(tags, (tag, index) => {
            return <span key={index}>#{tag}&nbsp;</span>;
          })}
          {map(links, (link, index) => {
            return (
              <MLink
                key={index}
                href={link}
                variant={'text'}
                disableRipple
                inactiveColorOpacity={1}
                sx={{
                  color: 'info.light',
                }}
              >
                {link}&nbsp;
              </MLink>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'space-around',
        }}
      >
        {map(cardActionData, (item, index) => {
          const { icon: Icon, count } = item;
          return (
            <MLink
              href={'#'}
              key={index}
              sx={{
                color: 'text.caption',
              }}
            >
              <Icon />
              &nbsp;
              {count}
            </MLink>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default SocialFeedbackCard;