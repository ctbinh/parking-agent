import React, { useEffect, useState } from 'react';
import DropDown from '../../components/DropDown';
import { DROP_DOWN_REVENUE_CHART } from '../../constants/dashboard';
import { useStateContext } from '../../contexts/ContextProvider';
import { LineChart } from '../../components';
import { XAxisRevenueChart, YAxisRevenueChart } from '../../constants/charts';
import { lineChartData } from '../../data/dummy';
import { filterDateTimeData } from '../../utils/helpingFunction';

const RevenueChart = () => {
  const { currentMode } = useStateContext();
  const [filterType, setFilterType] = useState(DROP_DOWN_REVENUE_CHART[0]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const changeFilterType = (value) => {
    setFilterType(value);
    setFilteredData(filterDateTimeData(data, value));
  };

  useEffect(() => {
    setData(lineChartData[0]);
    setFilteredData(lineChartData[0]);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center gap-2 mb-4">
        <p className="text-xl font-semibold">Doanh thu</p>
        <DropDown
          currentMode={currentMode}
          dropdownData={DROP_DOWN_REVENUE_CHART}
          value={filterType}
          onChange={changeFilterType}
        />
      </div>
      <LineChart
        id="revenue"
        LinePrimaryXAxis={XAxisRevenueChart}
        LinePrimaryYAxis={YAxisRevenueChart}
        data={filteredData}
      />
    </>
  );
};

export default RevenueChart;
