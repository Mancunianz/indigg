import { StaticImageData } from 'next/image';
import play0 from './images/play_0.png';
import play1 from './images/play_1.png';
import play2 from './images/play_2.png';
import play3 from './images/play_3.png';
import play4 from './images/play_4.png';
import play5 from './images/play_5.png';
import play6 from './images/play_6.png';

export const playingStatus: Record<string, (string | StaticImageData)[]> = {
  // ['Friends are playing']: [play0, play1, play2, play3],
  ['Clan is Playing']: [play4, play0, play1, play5, play6],
};
