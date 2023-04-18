'use client';
import ProductSection, { ProductSectionProps } from '@cc/productSection';
import {
  Avatar,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { isObject, map } from 'lodash';
import { SxProps, Theme } from '@nm/@mui/material';
import { ArrowCircleRightOutlined } from '@nm/@mui/icons-material';

export type LeaderBoardSectionRowData =
  | {
      name: string;
      lastActive: number;
      avatar: number;
    }
  | string
  | number;

export interface LeaderBoardSectionProps<
  T extends any = Record<string, LeaderBoardSectionRowData>,
  TRow extends T[] = T[],
> extends Omit<ProductSectionProps, 'children'> {
  columns: {
    id: keyof T;
    label: string;
    minWidth?: number;
    align?: TableCellProps['align'];
    format?: (value: number) => string;
  }[];
  rows: TRow;
}

const LeaderBoardSection = <
  T extends any = Record<string, LeaderBoardSectionRowData>,
  TRow extends T[] = T[],
>(
  props: LeaderBoardSectionProps<T, TRow>,
) => {
  const { columns, rows, ...productSectionProps } = props;

  return (
    <ProductSection {...productSectionProps}>
      <TableContainer sx={{ maxHeight: 736 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {map(columns, (column) => {
                const { align, minWidth, id } = column;
                return (
                  <TableCell
                    key={id.toString()}
                    align={align}
                    style={{ minWidth }}
                  >
                    <Typography
                      variant={'h4'}
                      component={'span'}
                      fontWeight={400}
                      color={'#B8B1B1'}
                    >
                      {column.label}
                    </Typography>
                  </TableCell>
                );
              })}
              <TableCell key={'action'} align={'center'} />
            </TableRow>
          </TableHead>
          <TableBody>
            {map(rows, (item, index) => {
              const row = item as Record<string, LeaderBoardSectionRowData>;
              return (
                <TableRow
                  key={index}
                  hover
                  tabIndex={-1}
                  sx={leaderBoardSectionRowSx}
                >
                  {map(columns, (column) => {
                    const { id, format } = column;
                    const data = row[String(id)];
                    const tempValue = isObject(data) ? data.name : data;
                    const value =
                      format && typeof tempValue === 'number'
                        ? format(tempValue)
                        : tempValue;
                    return (
                      <TableCell
                        key={String(column.id)}
                        sx={{
                          borderBottom: '6px solid black',
                        }}
                      >
                        {isObject(data) ? (
                          <CardHeader
                            avatar={<Avatar />}
                            title={data.name}
                            subheader={data.lastActive}
                            sx={{ p: 0 }}
                          />
                        ) : (
                          <Typography
                            variant={'h4'}
                            component={'span'}
                            fontWeight={400}
                          >
                            {value}
                          </Typography>
                        )}
                      </TableCell>
                    );
                  })}
                  <TableCell
                    sx={{
                      borderBottom: '6px solid black',
                    }}
                  >
                    <IconButton
                      sx={{
                        background: (theme) => theme.palette.primary.main,
                      }}
                      centerRipple={false}
                    >
                      <ArrowCircleRightOutlined />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ProductSection>
  );
};

export default LeaderBoardSection;

const leaderBoardSectionRowSx: SxProps<Theme> = () => {
  return {
    height: 92,
    background:
      'linear-gradient(90.19deg, rgba(252, 70, 107, 0.15) 0%, rgba(63, 94, 251, 0.15) 100%)',
  };
};