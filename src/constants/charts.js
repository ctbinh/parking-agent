export const XAxisRevenueChart = {
  valueType: 'DateTime',
  labelFormat: 'dd-MMM',
  intervalType: 'Days',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
  interval: 10,
};

export const YAxisRevenueChart = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const XAxisTimeColumnChart = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const YAxisTimeColumnChart = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};
