import React from 'react';
import VerticalBarChart from '@/components/graphs/VerticalBarChart';
import BarChart from '@/components/graphs/BarChart';
import percentageData, { percentageDataForBarCharts } from '@/utils/percentageData';
import * as data from '../data/choosingMajor';
import TreemapGraph from './graphs/TreemapGraph';

const UnUsedCharts = () => {
  return (
    <>
      <VerticalBarChart
        data={percentageDataForBarCharts(data.educationGroupData)}
        title='گروه تحصیلی شرکت‌کنندگان'
        hasXAxis
        // barColorVariable="var(--clr-chart-custom-a)"
      />
      <BarChart data={percentageDataForBarCharts(data.degreeData)} title='آخرین مقطع تحصیلی شرکت‌کنندگان' />
      <BarChart
        data={data.uniReasonData}
        title='دلیل اصلی رفتن به دانشگاه'
        rotateXTickLabelAngle
        marginBottom={150}
        isPercentage={false}
      />
      <BarChart data={data.uniAgainData} title='انتخاب دوبارهٔ دانشگاه' isPercentage={false} />
      <VerticalBarChart data={percentageData(data.marketInsightData)} title='میزان شناخت بازار کار' isPercentage />
      <VerticalBarChart data={percentageData(data.marketSatisfactionData)} title='میزان رضایت از بازار کار' />
      <VerticalBarChart
        data={percentageData(data.marketInsightEducationStatusData)}
        title='میزان شناخت بازار کار به تفکیک وضعیت تحصیلی'
      />
      <VerticalBarChart data={percentageData(data.familyEnforcementData)} title='میزان تحمیل نظر خانواده' />
      <BarChart
        data={percentageDataForBarCharts(data.educatedFamilyData)}
        title='تحصیلات خانواده در زمان انتخاب رشته'
        isPercentage={false}
      />
      <BarChart data={data.workData} title='میزان سابقه‌کار' />
      <VerticalBarChart data={percentageData(data.majorSatisfactionData)} title='میزان رضایت از انتخاب رشته' />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionSexData)}
        title='میزان رضایت از انتخاب رشته به تفکیک جنسیت'
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionEducationStatusData)}
        title='میزان رضایت از انتخاب رشته به تفکیک وضعیت تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionEducationGroupData)}
        title='میزان رضایت از انتخاب رشته به تفکیک گروه تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionEducatedFamilyData)}
        title='میزان رضایت از انتخاب رشته براساس تحصیلات داشتن یا نداشتن اعضای خانواده'
      />
      <VerticalBarChart
        data={customPercentage(data.resourcesData, 2269)}
        title='منابع استفاده‌شده'
        isPercentage
        // yAxisWidth={100}
        barLabelPosition='right'
        hasXAxis
      />
      <VerticalBarChart data={percentageData(data.resourcesImpactData)} title='تأثیر منابع استفاده‌شده' />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionWorkRelatedData)}
        title='میزان رضایت از انتخاب رشته براساس میزان سابقه‌کار'
        hasTwoColorPallets
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionProvinceSituationData)}
        title='میزان رضایت از انتخاب رشته براساس بومی یا غیربومی بودن'
      />
      <VerticalBarChart
        data={percentageData(data.marketSatisfactionProvinceCustomizedData)}
        title='میزان رضایت از بازار کار براساس استان محل تحصیل'
      />
      <BarChart
        data={percentageDataForBarCharts(data.sameAsUndergradData)}
        title='یکسان بودن رشتهٔ تحصیلات تکمیلی با رشتهٔ کارشناسی'
        isPercentage={false}
      />
      <BarChart data={data.backToThePastData} title='اگر به گذشته بازگردند' isPercentage={false} />
      <VerticalBarChart
        data={percentageDataForBarCharts(data.graduatesStudyReasonData)}
        title='علت اصلی رفتن به تحصیلات تکمیلی'
      />
      <BarChart
        data={percentageDataForBarCharts(data.uniTypeData)}
        title='نوع دانشگاه مقطع کارشناسی'
        isPercentage={false}
      />
      <TreemapGraph data={data.provinceBeforeData} title='استان محل سکونت قبل از ورود به دانشگاه' />
      <TreemapGraph data={data.provinceAfterData} title='استان محل تحصیل' />
      <VerticalBarChart
        data={customPercentage(data.factorsData, 1872)}
        title='عوامل بیچارگی در انتخاب رشته'
        isPercentage
        // yAxisWidth={100}
        barLabelPosition='right'
        hasXAxis
      />
      <VerticalBarChart
        data={customPercentage(data.afterUniData, 2269)}
        title='بعد دانشگاه چه بلایی سرشون اومد'
        isPercentage
        // yAxisWidth={100}
        barLabelPosition='right'
        hasXAxis
      />
      <VerticalBarChart
        data={percentageData(data.marketSatisfactionEducationStatusData)}
        title='میزان رضایت از بازار کار به تفکیک وضعیت تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.marketSatisfactionEducationGroupData)}
        title='میزان رضایت از بازار کار به تفکیک گروه تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.marketSatisfactionDegreeData)}
        title='میزان رضایت از بازار کار به تفکیک آخرین مقطع تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionDegreeData)}
        title='میزان رضایت از انتخاب رشته به تفکیک آخرین مقطع تحصیلی'
      />
      <VerticalBarChart
        data={percentageData(data.majorSatisfactionUniTypeData)}
        title='میزان رضایت از انتخاب رشته به تفکیک نوع دانشگاه'
      />
    </>
  );
};

export default UnUsedCharts;
const customPercentage = (theData, sum) => {
  return theData.map((item) => {
    return {
      name: item.name,
      value: Math.round((100 * item.value) / sum),
    };
  });
};
