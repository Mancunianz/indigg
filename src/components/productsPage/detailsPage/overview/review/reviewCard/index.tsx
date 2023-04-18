import {
  alpha,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardProps,
  Rating,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { isArray } from 'lodash';

export interface ReviewCardProps extends Omit<CardProps, 'children'> {
  data: {
    name: string;
    date: string;
    rating: number;
    subtitle: string;
    description: string;
  };
}

const ReviewCard = (props: ReviewCardProps) => {
  const { data, ...restCardProps } = props;
  const { name, date, rating, subtitle, description } = data;
  const { sx, ...rest } = restCardProps;

  return (
    <Card sx={[cardSx, ...(isArray(sx) ? sx : [sx])]} {...rest}>
      <CardHeader
        title={
          <>
            <Box component={'span'}>{name}</Box>
            <Box component={'span'}>{date}</Box>
            <Rating value={rating} size={'small'} readOnly precision={0.5} />
          </>
        }
        titleTypographyProps={{
          variant: 'subtitle1',
          color: 'text.subtitle',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'flex-end',
          columnGap: 3,
          mb: 1,
        }}
        subheader={subtitle}
        subheaderTypographyProps={{
          variant: 'body2',
          fontWeight: 500,
          color: 'text.primary',
        }}
        sx={{
          p: 0,
          pb: 1.5,
        }}
      />
      <CardContent sx={{ p: 0, ':last-child': { p: 0 } }}>
        <Typography variant={'body2'}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

const cardSx: SxProps<Theme> = (theme) => {
  return {
    px: 2.75,
    py: 3.25,
    width: 1,
    height: 200,
    background: alpha('#212121', 0.2),
    borderRadius: 2,
    border: '1px solid',
    borderColor: alpha(alpha(theme.palette.info.main, 0.65), 0.2),
  };
};