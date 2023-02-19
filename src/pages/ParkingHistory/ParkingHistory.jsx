import React, { useState } from "react";
import ListParked from "./ListParked";
import ListParking from "./ListParking";

const tabs = [
  {
    id: 0,
    title: "Xe đã ra",
    value: "parked",
  },
  {
    id: 1,
    title: "Xe chưa ra",
    value: "parking",
  },
];

const ParkingHistory = () => {
  const [targetTab, setTargetTab] = useState(tabs[0].value);

  return (
    <div className="px-6">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map((item) => {
          return (
            <li class="mr-2">
              <div key={item.id} onClick={() => setTargetTab(item.value)} class={`inline-block p-4 rounded-t-lg cursor-pointer ${targetTab === item.value ? "active" : "inactive"}`}>
                {item.title}
              </div>
            </li>
          );
        })}
      </ul>
      {targetTab === tabs[0].value ? <ListParked /> : <ListParking />}
    </div>
  );
};

export default ParkingHistory;
