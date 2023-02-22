import React, { useState } from 'react';
import { ImTicket } from 'react-icons/im';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import { Popover } from 'antd';
import EditModal from './EditModal';

function TicketItem({ openModal, isOpenModal }) {
  const [openDialog, setOpenopenDialog] = useState(false);
  const hide = () => {
    setOpenopenDialog(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpenopenDialog(newOpen);
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-cyan-300 to-cyan-500 py-2 ">
        <div className="flex items-center justify-between border-b border-dashed border-b-gray-600 pb-4 pt-2 px-4">
          <div className="flex items-center">
            <ImTicket className="text-xl text-orange-500" />
            <h3 className="font-semibold text-lg ml-4">Vé xe 1</h3>
          </div>
          <div>
            <Popover
              placement="rightBottom"
              title="Tùy chọn"
              trigger="click"
              open={openDialog}
              onOpenChange={handleOpenChange}
              content={
                <div>
                  <span
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-200 "
                    onClick={() => {
                      openModal();

                      hide();
                    }}
                  >
                    <AiOutlineEdit className="text-lg mr-2" />
                    Chỉnh sửa
                  </span>
                  <span className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                    <AiOutlineDelete className="text-lg mr-2" />
                    Xóa
                  </span>
                </div>
              }
              arrow={false}
            >
              <BsThreeDotsVertical className="text-xl cursor-pointer" />
            </Popover>
          </div>
        </div>
        <div className="w-full px-4 py-4">
          <div className="w-full flex justify-center">
            <span className="w-1/3 font-semibold">Giá ban đầu:</span>
            <span className="flex-1">4k / 5h đầu</span>
          </div>
          <div className="w-full flex justify-center">
            <span className="w-1/3 font-semibold">Giá thay đổi:</span>
            <span className="flex-1">Tăng 2k / 1h</span>
          </div>
          <div className="w-full flex justify-center">
            <span className="w-1/3 font-semibold">Thời gian áp dụng:</span>
            <span className="flex-1">6h-18h hàng ngày</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketItem;
