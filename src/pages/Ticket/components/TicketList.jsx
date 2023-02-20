import React from 'react';
import TicketItem from './TicketItem';

function TicketList() {
  return (
    <div className="w-full grid grid-cols-2 gap-10">
      <TicketItem />
      <TicketItem />
    </div>
  );
}

export default TicketList;
