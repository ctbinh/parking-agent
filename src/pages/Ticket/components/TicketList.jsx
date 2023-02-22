import React, { useState } from 'react';
import EditForm from './EditForm';
import EditModal from './EditModal';
import TicketItem from './TicketItem';

function TicketList() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full grid grid-cols-2 gap-10">
        <TicketItem
          isOpenModal={openModal}
          openModal={() => setOpenModal(true)}
        />
        <TicketItem
          isOpenModal={openModal}
          openModal={() => setOpenModal(true)}
        />
      </div>
      <EditModal open={openModal} close={() => setOpenModal(false)}>
        <EditForm />
      </EditModal>
    </>
  );
}

export default TicketList;
