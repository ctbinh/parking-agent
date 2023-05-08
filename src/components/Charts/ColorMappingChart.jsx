import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from '@syncfusion/ej2-react-charts';

import { colorMappingData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMappingChart = ({ PrimaryXAxis, PrimaryYAxis, data }) => {
  const { currentMode } = useStateContext();
  return (
    <div className="w-full">
      <ChartComponent
        id="charts-color-mapping"
        primaryXAxis={PrimaryXAxis}
        primaryYAxis={PrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ mode: 'Range', background: 'white' }}
        tooltip={{ enable: true }}
        backgroun={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          <RangeColorSettingDirective
            label="Today"
            start={9.9}
            end={9.9}
            colors={colorMappingData[2]}
          />
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMappingChart;
