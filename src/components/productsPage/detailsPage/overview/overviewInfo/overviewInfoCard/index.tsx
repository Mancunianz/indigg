import {
  Card,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  Stack,
} from '@mui/material';
import { isArray } from 'lodash';
import { forwardRef } from 'react';

export interface OverviewInfoCardProps extends CardProps {
  disableSpacing?: boolean;
  disableGutter?: boolean;
  cardHeaderProps?: CardHeaderProps;
  cardContentProps?: Omit<CardContentProps, 'children'>;
}

const OverviewInfoCard = forwardRef<HTMLDivElement, OverviewInfoCardProps>(
  (props, ref) => {
    const {
      title,
      children,
      cardHeaderProps,
      cardContentProps,
      disableSpacing,
      disableGutter,
      ...restCardProps
    } = props;
    const { sx, ...restProps } = restCardProps;
    return (
      <Card
        ref={ref}
        sx={[
          {
            width: 290,
            height: 110,
            background: '#212121',
          },
          ...(isArray(sx) ? sx : [sx]),
        ]}
        component={Stack}
        {...restProps}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'overline',
            fontWeight: 500,
            lineHeight: '1',
          }}
          {...cardHeaderProps}
        />
        <CardContent {...cardContentProps}>{children}</CardContent>
      </Card>
    );
  },
);

export default OverviewInfoCard;

OverviewInfoCard.displayName = OverviewInfoCard.name;