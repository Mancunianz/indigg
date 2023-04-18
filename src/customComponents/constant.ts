import { Platform } from '@/src/commomTypes';
import {
  AndroidRounded,
  Apple,
  LanguageRounded,
  SvgIconComponent,
  WindowOutlined,
} from '@mui/icons-material';

export const platformIcon: Record<
  Platform,
  { icon: SvgIconComponent; color: string }
> = {
  WINDOWS: { icon: WindowOutlined, color: '#00a1f1' },
  WEB: { icon: LanguageRounded, color: '#00a4ef' },
  IOS: { icon: Apple, color: '#A3AAAE' },
  ANDROID: { icon: AndroidRounded, color: '#3DDC84' },
  MAC: { icon: Apple, color: '#A3AAAE' },
};