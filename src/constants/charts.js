export const XAxisLineChartSetting = [
  {
    key: 'week',
    title: 'Tuần',
    setting: {
      valueType: 'DateTime',
      labelFormat: 'dd-MMM',
      intervalType: 'Days',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 },
      background: 'white',
      interval: 1,
    },
  },
  {
    key: 'month',
    title: 'Tháng',
    setting: {
      valueType: 'DateTime',
      labelFormat: 'dd-MMM',
      intervalType: 'Days',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 },
      background: 'white',
      interval: 3,
    },
  },
  {
    key: 'year',
    title: 'Năm',
    setting: {
      valueType: 'DateTime',
      labelFormat: 'MMMM',
      intervalType: 'Months',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 },
      background: 'white',
      interval: 1,
    },
  },
];

export const YAxisRevenueChart = {
  labelFormat: '{value}k',
  rangePadding: 'None',
  minimum: 0,
  // maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const YAxisCustomerChart = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 0,
  interval: 100,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const XAxisTimeColumnChart = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Giờ hoạt động',
};

export const YAxisTimeColumnChart = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}%',
  title: 'Lượng khách trong nhà xe',
};
