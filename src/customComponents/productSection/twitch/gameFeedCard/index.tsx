import { Card } from '@mui/material';
import { CardProps } from '@nm/@mui/material';
import { StaticImageData } from '@nm/next/image';
import { Platform } from '@/src/commomTypes';
import { MLinkProps } from '@cc/mLink';

export interface GameFeedCardProps extends Omit<CardProps, 'children'> {
  data: {
    banner: string | StaticImageData;
    rating: number;
    title: Capitalize<string>;
    genre: string[];
    platforms: Platform[];
    href: MLinkProps['href'];
  };
}

const GameFeedCard = () => {
  return <Card></Card>;
};

export default GameFeedCard;