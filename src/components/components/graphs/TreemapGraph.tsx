import React from 'react';
import {
  ResponsiveContainer, Treemap,
} from 'recharts';
import { barRadius, chartColors, ChartWrapper } from './BarChart';

const TreemapGraph = ({
  data,
  title,
  figCaption = title,
}) => {
  const reversed = [];
  let sum = 0;
  data.forEach((i) => { sum += i.value; });
  let max = 0;
  data.forEach((i) => {
    if (i.value > max) max = i.value;
  });
  data.forEach((i) => { return reversed.unshift(i); });
  reversed.forEach((i) => { i.rank = 1; });
  reversed.forEach((item) => {
    reversed.forEach((i) => {
      if (item.value > i.value) item.rank += 1;
    });
  });
  return (
    <ChartWrapper title={title} figCaption={figCaption}>
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          isAnimationActive={false}
          dataKey="value"
          data={reversed}
          aspectRatio={1 / 1}
          content={<CustomizedContent sum={sum} max={max} data={reversed} />}
          style={{ overflow: 'hidden', borderRadius: barRadius, backgroundColor: chartColors.treeMapBackground }}
        />
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default TreemapGraph;

const CustomizedContent = (props) => {
  const {
    depth, x, y, width, height, name, value, sum, max, data,
  } = props;
  const item = data.find((i) => { return i.value === value; });
  if (!item) return null;
  const opacity = (item.rank / 31).toFixed(2);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: chartColors.good,
          stroke: 'var(--background-color)',
          strokeWidth: 1,
          strokeOpacity: 1 / (depth + 1e-10),
          zIndex: 100000,
          opacity,
        }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 7}
        textAnchor="middle"
        fill="#fff"
        fontSize={10}
        style={(height / width) > 3 && {
          transformBox: 'fill-box',
          transformOrigin: 'center',
          transform: 'rotate(-90deg)',
        }}
      >
        {name}
      </text>
    </g>
  );
};
