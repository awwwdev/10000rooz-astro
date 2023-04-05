const percentageData = (data) => {
  const processedArray = data.map((item) => {
    const processItem = {
      name: null,
      value0: null,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
    };
    // your process
    const sum = item.value0 + item.value1 + item.value2 + item.value3 + item.value4;
    processItem.value0 = 100 * (item.value0 / sum);
    processItem.value1 = 100 * (item.value1 / sum);
    processItem.value2 = 100 * (item.value2 / sum);
    processItem.value3 = 100 * (item.value3 / sum);
    processItem.value4 = 100 * (item.value4 / sum);

    processItem.name = item.name;
    return processItem;
  });
  console.log('🚀 ~ processedArray', processedArray);
  return processedArray;
};

export default percentageData;

export const percentageDataForBarCharts = (data) => {
  if (data.length === 0) return [];

  let sum = 0;
  data.forEach((item) => {
    sum += item.value;
  });

  const processedArray = data.map((item) => {
    return {
      name: item.name,
      value: (item.value * 100) / sum,
      // value: Math.round((item.value * 100) / sum),
    };
  });
  return processedArray;
};

// export const percentageDataForPairedBarCharts = (data) => {
//   if (data.length === 0) return [];

//   let sum0 = 0;
//   let sum1 = 0;
//   data.forEach((item) => {
//     sum0 += item.value0;
//     sum1 += item.value1;
//   });

//   const processedArray = data.map((item) => ({
//     name: item.name,
//     value0: (item.value0 * 100) / sum0,
//     value1: (item.value1 * 100) / sum1,
//   }));
//   return processedArray;
// };
