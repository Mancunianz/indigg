import { Avatar, Card, CardHeader, CardProps } from '@mui/material';
import { isArray } from 'lodash';

export interface ActivityCardProps extends Omit<CardProps, 'children'> {
  data: {
    avatar?: string;
    title: string;
    subheader: string;
  };
}

const ActivityCard = (props: ActivityCardProps) => {
  const { data, ...restCardProps } = props;
  const { sx, ...cardProps } = restCardProps;
  const { avatar, title, subheader } = data;
  return (
    <Card
      sx={[
        {
          height: 100,
          width: 1,
          background:
            'linear-gradient(116.85deg, rgba(252, 70, 107, 0.15) 0%, rgba(63, 94, 251, 0.15) 100%)',
        },
        ...(isArray(sx) ? sx : [sx]),
      ]}
      {...cardProps}
    >
      <CardHeader
        avatar={
          <Avatar
            variant={'circular'}
            sx={{
              width: 42,
              height: 42,
            }}
          />
        }
        title={title}
        titleTypographyProps={{
          variant: 'body2',
          fontWeight: 500,
          lineHeight: 1.1,
          mb: 0.5,
        }}
        subheader={subheader}
        subheaderTypographyProps={{
          variant: 'body2',
          color: 'text.secondary',
        }}
        sx={{
          alignItems: 'flex-start',
          p: 2.5,
        }}
      />
    </Card>
  );
};

export default ActivityCard;