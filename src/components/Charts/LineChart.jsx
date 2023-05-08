import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = ({ id, LinePrimaryXAxis, LinePrimaryYAxis, data }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id={`line-chart-${id}`}
      height="400px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName="x"
          yName="y"
          type="Line"
          marker={{ visible: true, width: 2, height: 2 }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
