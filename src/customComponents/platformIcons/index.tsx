import { platformIcon } from '@/src/customComponents/constant';
import { SvgIconProps } from '@mui/material';
import { isArray } from 'lodash';
import { memo, RefObject, useRef } from 'react';
import { useHoverDirty } from 'react-use';

export type PlatformIconProps = SvgIconProps & {
  isHover?: boolean;
  platform: keyof typeof platformIcon;
  hoverRef?: RefObject<HTMLElement>;
};

const PlatformIcon = (props: PlatformIconProps) => {
  const { sx, platform, isHover, hoverRef, ...restProps } = props;
  const PlatformIcon = platformIcon[platform].icon;
  const color = platformIcon[platform].color;
  const iconRef = useRef(null);
  const isHoverDirty = useHoverDirty(hoverRef || iconRef, true);

  return (
    <PlatformIcon
      ref={iconRef}
      sx={[
        isHover && isHoverDirty
          ? { color, transition: 'all 0.2s ease-in-out' }
          : {},
        ...(isArray(sx) ? sx : [sx]),
      ]}
      {...restProps}
    />
  );
};

export default memo(PlatformIcon);