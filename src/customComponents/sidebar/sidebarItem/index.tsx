import {
  Card,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardProps,
  SxProps,
  Theme,
} from '@mui/material';
import { ReactNode } from 'react';
import { isArray } from 'lodash';

export interface SidebarItemProps
  extends Omit<CardProps, 'children' | 'title'> {
  title: string;
  children: ReactNode;
  cardContentProps?: Omit<CardContentProps, 'children'>;
  cardHeaderProps?: Omit<CardHeaderProps, 'children'>;
  disablePadding?: boolean;
  disableGutters?: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  const {
    title,
    children,
    cardHeaderProps = {},
    cardContentProps = {},
    disablePadding = false,
    disableGutters = false,
    ...restCardProps
  } = props;
  const { sx: cardSxProp, ...restProps } = restCardProps;
  const { sx: cardHeaderSxProp, ...restCardHeaderProps } = cardHeaderProps;
  const { sx: cardContentSxProp, ...restCardContentProps } = cardContentProps;

  return (
    <Card
      sx={[cardSx, ...(isArray(cardSxProp) ? cardSxProp : [cardSxProp])]}
      {...restProps}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: 'subtitle1',
        }}
        sx={[
          cardHeaderSx,
          ...(isArray(cardHeaderSxProp)
            ? cardHeaderSxProp
            : [cardHeaderSxProp]),
        ]}
        {...restCardHeaderProps}
      />
      <CardContent
        sx={[
          cardContentSx,
          {
            px: disableGutters ? 2 : 4,
            py: disablePadding ? 2 : 3,
          },
          ...(isArray(cardContentSxProp)
            ? cardContentSxProp
            : [cardContentSxProp]),
        ]}
        {...restCardContentProps}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default SidebarItem;
const cardSx: SxProps<Theme> = (theme) => {
  return {
    width: '100%',
    height: '100%',
    display: 'flex',
    background: theme.palette.common.black,
    flexDirection: 'column',
    borderRadius: 0,
  };
};
const cardHeaderSx: SxProps<Theme> = () => {
  return {
    width: '100%',
    height: 48,
    background: '#212121',
    textTransform: 'capitalize',
  };
};
const cardContentSx: SxProps<Theme> = () => {
  return {
    width: '100%',
    height: 'fit-content',
    background: 'transparent',
    '&:last-child': {
      paddingBottom: 3,
    },
  };
};