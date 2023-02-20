import React from 'react';
import { Header } from '../../components';
import TicketList from './components/TicketList';

function Tickets() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Vé xe" />
      <div>
        <div className="w-full">
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default Tickets;
