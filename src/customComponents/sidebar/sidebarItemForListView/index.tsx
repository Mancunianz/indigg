import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemTextProps,
  ListProps,
  SxProps,
  Theme,
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import { capitalize, isArray, map, upperCase } from 'lodash';
import { ReactNode, useRef } from 'react';
import { BehaviorSubject } from '@nm/rxjs';
import { useObservable } from 'react-use';
import { FilterBaseService } from '@rs/filterBaseService';

// import { handleValidateItem } from '@/src/utils';

export interface SidebarItemForListViewProps<T extends string = string>
  extends Omit<ListProps, 'children'> {
  data: (T | { icon?: ReactNode; title: string | T; validatorKey?: T })[];
  isUpperCase?: boolean;
  ListItemTextProps?: Omit<ListItemTextProps, 'children'>;
  $validateData?: BehaviorSubject<T[]>;
}

const { handleValidateItem } = new FilterBaseService();
const SidebarItemForListView = <T extends string = string>(
  props: SidebarItemForListViewProps<T>,
) => {
  const {
    data,
    isUpperCase = false,
    $validateData,
    ListItemTextProps = {},
    ...restProps
  } = props;
  const { sx, ...restListProps } = restProps;
  const { primaryTypographyProps, ...restListTextProps } = ListItemTextProps;
  const $tempValidateData = useRef(new BehaviorSubject<T[]>([]));
  const $validateObservable = $validateData || $tempValidateData.current;
  const validateData = useObservable(
    $validateObservable,
    $validateObservable.value,
  );

  const transformer = isUpperCase ? upperCase : capitalize;

  return (
    <List
      sx={[listSx, ...(isArray(sx) ? sx : [sx])]}
      disablePadding
      {...restListProps}
    >
      {map(data, (item, index) => {
        const tempItem =
          typeof item === 'string'
            ? item
            : item.validatorKey || (item.title as T);
        const isItemActive = validateData.includes(tempItem);
        return (
          <ListItemButton
            key={index}
            disableGutters
            sx={listItemSx}
            onClick={() => handleValidateItem(tempItem, $validateObservable)}
          >
            <ListItemIcon sx={listItemIconsSx}>
              {typeof item === 'string' || !item.icon ? (
                <Circle
                  sx={{
                    color: isItemActive ? 'text.primary' : 'background.paper',
                  }}
                />
              ) : (
                item.icon
              )}
            </ListItemIcon>
            <ListItemText
              primary={transformer(
                typeof item === 'string' ? item : item.title,
              )}
              {...ListItemTextProps}
              primaryTypographyProps={{
                variant: 'subtitle2',
                color: isItemActive ? 'text.primary' : '#B8B1B1',
                ...primaryTypographyProps,
              }}
              {...restListTextProps}
            />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default SidebarItemForListView;
const listSx: SxProps<Theme> = () => {
  return {
    width: 1,
    minWidth: 'fit-content',
  };
};

const listItemSx: SxProps<Theme> = () => {
  return {
    px: 2,
    borderRadius: 1,
    columnGap: 2,
  };
};
const listItemIconsSx: SxProps<Theme> = () => {
  return {
    minWidth: 'unset',
    'svg, img': {
      width: 18,
      height: 18,
    },
  };
};