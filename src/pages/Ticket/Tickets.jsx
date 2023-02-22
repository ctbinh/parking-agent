import React from 'react';
import { Button } from '../../components';
import TicketList from './components/TicketList';

function Tickets() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div>
        <div className="w-full flex items-center justify-between mb-5">
          <h3 className="text-lg">Vé xe</h3>
          <div>
            <Button
              onClick={() => {}}
              text="+ Tạo vé"
              className="bg-orange-400 text-white text-xs w-20 rounded-lg hover:bg-orange-400/80"
            />
          </div>
        </div>
        <div className="w-full">
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default Tickets;
