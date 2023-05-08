import React, { useState } from 'react';
import DropDown from '../../components/DropDown';
import { DROP_DOWN_TIME_CHART } from '../../constants/dashboard';
import { useStateContext } from '../../contexts/ContextProvider';
import ColorMappingChart from '../../components/Charts/ColorMappingChart';
import { XAxisTimeColumnChart, YAxisTimeColumnChart } from '../../constants/charts';
import { colorMappingData } from '../../data/dummy';

const TimeChart = () => {
  const { currentMode } = useStateContext();
  const [filterType, setFilterType] = useState(DROP_DOWN_TIME_CHART[0]);
  const changeFilterType = (value) => {
    setFilterType(value);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <p className="text-xl font-semibold">Giờ đông khách</p>
        <DropDown
          currentMode={currentMode}
          dropdownData={DROP_DOWN_TIME_CHART}
          value={filterType}
          onChange={changeFilterType}
        />
      </div>
      <ColorMappingChart
        PrimaryXAxis={XAxisTimeColumnChart}
        PrimaryYAxis={YAxisTimeColumnChart}
        data={colorMappingData[0]}
      />
    </>
  );
};

export default TimeChart;
