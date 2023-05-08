export const filterDateTimeData = (data, type) => {
  const today = new Date();
  const filteredData = data.filter((datum) => {
    const datumDate = new Date(datum.x);
    switch (type) {
      case 'Tuần':
        const weekStart = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - today.getDay()
        );
        return datumDate >= weekStart;
      case 'Tháng':
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        return datumDate >= monthStart;
      case 'Năm':
        const yearStart = new Date(today.getFullYear(), 0, 1);
        return datumDate >= yearStart;
      default:
        return false;
    }
  });
  return filteredData;
};
