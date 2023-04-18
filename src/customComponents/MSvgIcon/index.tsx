import { forwardRef } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export type MSvgIconProps = {
  icon: any;
} & SvgIconProps;

const MSvgIcon = forwardRef<SVGSVGElement, MSvgIconProps>((props, ref) => {
  const { icon, ...restSvgProps } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;
  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`} {...restSvgProps}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        svgPathData.map((d: string, i: number) => (
          <path key={i} style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});

export default MSvgIcon;

MSvgIcon.displayName = MSvgIcon.name;