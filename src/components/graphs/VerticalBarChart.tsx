import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Rectangle,
} from 'recharts';
import {
  barRadiusSmall, chartColors, ChartWrapper, valueAccessor,
} from './BarChart';

const sizes = {
  svgMarginBottom: 0,
  barGap: 20,
  barSize: 25,
  xAxisHeight: 30,
  legendHeight: 0,
};

// const sizesForFigma = {
//   svgMarginBottom: 0,
//   barGap: 25,
//   barSize: 38,
//   xAxisHeight: 30,
//   legendHeight: 0,
// };

// if (isFigma) sizes = sizesForFigma;

const barConfig = {
  stackId: 'a',
  stroke: chartColors.background,
  strokeWidth: 4,
  // barGap: 0,
  // barCategoryGap: 0,
  barSize: sizes.barSize,
  marginRight: 4,
};

const VerticalBarChart = ({
  data,
  title,
  figCaption = title,
  isPercentage = true,
  yAxisWidth = 60,
  barLabelPosition = 'insideRight',
  hasXAxis = false,
  hasTwoColorPallets = false,
  height = null,
}) => {
  const labelConfig = {
    fill: barLabelPosition === 'insideRight' ? 'white' : chartColors.goodText,
    stroke: 'white',
    strokeWidth: 0,
    fontSize: 10,
    fontWeight: 400,
    position: barLabelPosition,
  };
  // const labelConfigForFigma = {
  //   fill: barLabelPosition === 'insideRight' ? chartColors.background : chartColors.goodText,
  //   stroke: chartColors.background,
  //   strokeWidth: 0,
  //   fontSize: 24,
  //   fontFamily: 'Yekan Bakh VF',
  //   fontWeight: 500,
  //   transform: 'translateY(-10px)',
  //   position: barLabelPosition,
  // };

  const tickConfig = {
    fontSize: 10,
    fill: chartColors.axisText,
    // direction: 'rtl',
  };
  // const tickConfigForFigma = {
  // fontSize: 24,
  // fontFamily: 'Yekan Bakh VF',
  // fontWeight: 500,
  // fill: chartColors.axisText,
  // };

  // if (isFigma) tickConfig = tickConfigForFigma;

  const barsCount = data.length;
  let chartHeight = sizes.svgMarginBottom + sizes.legendHeight;
  if (hasXAxis) chartHeight += sizes.xAxisHeight;
  chartHeight += sizes.barSize * barsCount + sizes.barGap * (barsCount - 1);

  return (

    <ChartWrapper title={title} figCaption={figCaption}>
      {/* {data[0].value0 && (
        <div className="flex j-center a-center gap--xl outline--red">
          <div className={ styles.legendItem}>
            بسیار کم
          </div>
          <div className={ styles.legendItem}>
            کم
          </div>
          <div className={ styles.legendItem}>
            متوسط
          </div>
          <div className={ styles.legendItem}>
            زیاد
          </div>
          <div className={ styles.legendItem}>
            بسیار زیاد
          </div>
        </div>
      )} */}
      <ResponsiveContainer
        width="100%"
        height={chartHeight}
        className={hasTwoColorPallets && 'chart-with-color-pallet'}
      >
        <BarChart
          style={{ direction: 'ltr' }}
          layout="vertical"
          barGap={sizes.barGap}
          // barCategoryGap={0}
          // width={500}
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: sizes.svgMarginBottom,
            left: 0,
          }}
        >
          <XAxis
            type="number"
            hide={!hasXAxis}
            height={hasXAxis ? sizes.xAxisHeight : 0}
            orientation="top"
            tickMargin={5}
            domain={[0, 100]}
            allowDecimals={false}
            stroke={chartColors.axis}
            tick={{
              fontSize: 15,
              fill: chartColors.axisText,
            }}
            padding={{ right: 0 }}
          />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            stroke={chartColors.axis}
            interval={0}
            tickLine={false}
            tick={tickConfig}
            width={yAxisWidth}
            padding={{ top: 0, bottom: 0 }}
          />
          {/* {data[0].value0 && (
            <Legend
              formatter={renderFarsiLegend}
              iconSize={11}
              iconType={process.env.NEXT_PUBLIC_ENV === 'development' ? 'square' : 'circle'}
              verticalAlign="top"
              margin={{
                top: 0, left: 0, right: 0, bottom: 0,
              }}
              height={sizes.legendHeight}
              wrapperStyle={{
                fontSize: '15px',
                direction: 'rtl',
                display: 'flex',
                justifyContent: 'center',
                // marginBlockStart: 0,
                // marginBlockEnd: 0,
                // marginInlineEnd: 0,
                // marginInlineStart: 0,
                // paddingBlockStart: 0,
                // paddingBlockStart: 0,
                // paddingInlineStart: 0,
                // paddingInlineEnd: 0,
                margin: '0 !importan',
                padding: '0 !importan',
              }}
            />
          )} */}
          {data[0].value && (
            <Bar
              dataKey="value"
              fill={chartColors.good}
              shape={(props) => { return <Rectangle radius={[0, barRadiusSmall, barRadiusSmall, 0]} {...props} />; }}
              {...barConfig}
            >
              <LabelList {...labelConfig} valueAccessor={isPercentage && valueAccessor('value')} />
            </Bar>
          )}
          {data[0].value0 && (
            <>
              <Bar
                dataKey="value4"
                fill={chartColors.gray2}
                shape={(props) => { return <Rectangle radius={[barRadiusSmall, 0, 0, barRadiusSmall]} {...props} />; }}
                {...barConfig}
              >
                <LabelList valueAccessor={valueAccessor('value4')} {...labelConfig} />
              </Bar>
              <Bar dataKey="value3" fill={chartColors.gray2} {...barConfig}>
                <LabelList valueAccessor={valueAccessor('value3')} {...labelConfig} />
              </Bar>
              <Bar dataKey="value2" fill={chartColors.neutral} {...barConfig} />
              <Bar dataKey="value1" fill={chartColors.gray0} {...barConfig} />
              <Bar
                dataKey="value0"
                fill={chartColors.gray0}
                shape={(props) => { return <Rectangle radius={[0, barRadiusSmall, barRadiusSmall, 0]} {...props} />; }}
                {...barConfig}
              />
            </>
          )}
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default VerticalBarChart;

const renderFarsiLegend = (value: string) => {
  const farsiLegend = {
    value0: 'بسیار کم',
    value1: 'کم',
    value2: 'متوسط',
    value3: 'زیاد',
    value4: 'بسیار زیاد',
  };

  return <span style={{ marginRight: 3 }}>{farsiLegend[value]}</span>;
};
