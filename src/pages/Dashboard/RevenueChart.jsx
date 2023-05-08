import React, { useMemo, useState } from 'react';
import DropDown from '../../components/DropDown';
import { useStateContext } from '../../contexts/ContextProvider';
import { LineChart } from '../../components';
import { XAxisLineChartSetting, YAxisRevenueChart } from '../../constants/charts';
import { lineChartData } from '../../data/dummy';
import { filterDateTimeData } from '../../utils/helpingFunction';

const RevenueChart = () => {
  const { currentMode } = useStateContext();
  const [filterType, setFilterType] = useState(
    JSON.parse(localStorage.getItem('filterTypeRevenueChart')) ?? XAxisLineChartSetting[0]
  );
  const data = lineChartData[0];
  const changeFilterType = (value) => {
    localStorage.setItem('filterTypeRevenueChart', JSON.stringify(value));
    setFilterType(value);
  };
  const filteredData = useMemo(
    () => filterDateTimeData(data, filterType.key),
    [data, filterType]
  );

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <p className="text-xl font-semibold">Doanh thu</p>
        <DropDown
          currentMode={currentMode}
          dropdownData={XAxisLineChartSetting}
          value={filterType.key}
          onChange={changeFilterType}
        />
      </div>
      <LineChart
        id="revenue"
        LinePrimaryXAxis={filterType.setting}
        LinePrimaryYAxis={YAxisRevenueChart}
        data={filteredData}
      />
    </>
  );
};

export default RevenueChart;
