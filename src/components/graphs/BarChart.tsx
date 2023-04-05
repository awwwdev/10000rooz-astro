import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, LabelList, Text, Rectangle,
} from 'recharts';

export const valueAccessor = (attribute) => { return ({ payload }) => { return `${Math.round(payload[attribute])}%`; }; };

export const isFigma = false;

export const chartColors = {
  good: 'var(--clr-chart-good)',
  goodText: 'var(--clr-chart-good-text)',
  bad: 'var(--clr-chart-bad)',
  axis: 'var(--clr-chart-axis)',
  axisText: 'var(--clr-chart-axis-text)',
  neutral: 'var(--clr-chart-neutral)',
  treeMapBackground: 'var(--clr-primary-6)',
  background: 'var(--background-color)',
  gray2: 'var(--clr-chart-axis-text)',
  gray1: 'var(--clr-chart-neutral)',
  gray0: 'var(--clr-gray-3)',
};

// const chartColorsInFigma = {
//   good: '#21AA74',
//   goodText: '#21AA74',
//   bad: '#F56C1D',
//   axis: '#ABABAB',
//   axisText: '#828282',
//   neutral: '#ABABAB',
//   treeMapBackground: '#21AA74',
//   background: '#F7F7F7',
//   gray2: '#828282',
//   gray1: '#ABABAB',
//   gray0: '#D9D9D9',
// };

export const barRadius = isFigma ? 0 : 8;
export const barRadiusSmall = isFigma ? 0 : 5;

const labelConfig = {
  fill: chartColors.good,
  strokeWidth: 0,
  fontSize: 15,
  fontWeight: 400,
  position: 'top',
};

const CustomizedAxisTick = ({
  x, y, stroke, payload,
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <Text angle={-90} width={10} x={0} y={0} dy={0} textAnchor="end" fontSize={10} fill={chartColors.axisText}>
        {payload.value}
      </Text>
    </g>
  );
};

const BarChartGraph = ({
  data,
  title,
  figCaption = title,
  isPercentage = true,
  barColorVariable = false,
  barColorVariableMute = null,
  rotateXTickLabelAngle = null,
  marginBottom = 0,
  hasYAxis = false,
}) => {
  return (
    <ChartWrapper
      title={title}
      figCaption={figCaption}
      maxWidth={300 + data.length * 90}
    >
      <ResponsiveContainer height={300 + marginBottom} width="100%" debounce={1}>
        <BarChart
          data={data}
          style={{ direction: 'ltr' }}
          margin={{
            top: 25, right: 5, left: 5, bottom: marginBottom ?? 5,
          }}
        >
          <XAxis
            dataKey="name"
            stroke={chartColors.axis}
            tickLine={false}
            tick={rotateXTickLabelAngle ? <CustomizedAxisTick /> : {
              fontSize: 10,
              fill: chartColors.axisText,
              // angle: rotateXTickLabelAngle ?? 0,
            }}
            // angle={90}
            // style={{ direction: 'rtl' }}
            interval={0}
          />
          <YAxis
            hide={!hasYAxis}
            width={30}
            stroke={chartColors.axis}
            tick={{
              fontSize: 10,
              fill: chartColors.axisText,
            }}
            padding={{ top: 20, bottom: 0 }}
          />
          {data[0].value && (
            <Bar
              dataKey="value"
              barSize={40}
              fill={barColorVariable || chartColors.good}
              shape={(props) => { return <Rectangle radius={[barRadius, barRadius, 0, 0]} {...props} />; }}
            >
              {isPercentage ? <LabelList valueAccessor={isPercentage && valueAccessor('value')} {...labelConfig} />
                : <LabelList {...labelConfig} />}
            </Bar>
          )}
          {data[0].value0 && (
            <>
              <Legend formatter={renderFarsiLegend} iconSize="9px" wrapperStyle={{ fontSize: '15px' }} />
              <Bar
                dataKey="value0"
                barSize={20}
                fill={barColorVariableMute || chartColors.bad}
                shape={(props) => { return <Rectangle radius={[barRadiusSmall, barRadiusSmall, 0, 0]} {...props} />; }}
              />
              <Bar
                dataKey="value1"
                barSize={20}
                fill={barColorVariable || chartColors.good}
                shape={(props) => { return <Rectangle radius={[barRadiusSmall, barRadiusSmall, 0, 0]} {...props} />; }}
                label={{
                  fill: chartColors.goodText,
                  stroke: chartColors.goodText,
                  strokeWidth: 0,
                  fontSize: 10,
                  fontWeight: 400,
                  position: 'top',
                }}
              />
            </>
          )}
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default BarChartGraph;

const renderFarsiLegend = (value: string) => {
  const farsiLegend = {
    value0: 'کل سابقه‌کار',
    value1: 'سابقه‌کار مرتبط با رشتهٔ تحصیلی',
  };

  return <span>{farsiLegend[value]}</span>;
};

export const ChartWrapper = ({
  title, figCaption = title, style = null, children, maxWidth,
}) => {
  return (
    <div className="max-width--article width--100" style={style}>
      <h3>{title}</h3>
      <figure style={{ maxWidth, marginLeft: 'auto', marginRight: 'auto' }}>
        {children}
        {figCaption && <figcaption className={`${(figCaption === title) && 'sr-only'}  text-align--center font-size--s`}>{figCaption}</figcaption>}
      </figure>
    </div>
  );
};
