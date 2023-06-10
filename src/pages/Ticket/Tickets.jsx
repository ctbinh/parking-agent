import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import ticketApi from '../../apis/ticket.api';

function Tickets() {
  const [monthTicketPrice, setMonthTicketPrice] = useState(0)
  const [startPrice, setStartPrice] = useState(0)
  const [hours, setHours] = useState(0)
  const [bonusPrice, setBonusPrice] = useState(0)

  useEffect(() => {
    const getTicket = async () => {
      const monthTicketData = await ticketApi.getMonthTicket()
      setMonthTicketPrice(monthTicketData.data)
      const ticketData = await ticketApi.getTicketPerHour()
      setMonthTicketPrice(ticketData.data)
    }
    getTicket()
  }, [])

  const updateMonthTicket = async () => {
    await ticketApi.updateMonthTicket(monthTicketPrice)
  }

  const updateTicket = async () => {
    await ticketApi.updateTicketPerHour(startPrice, hours, bonusPrice)
  }
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div>
        <div className="w-full flex items-center mb-5 gap-2">
          <h3 className="text-lg font-bold">Vé tháng:</h3>
          <input type="number" className="rounded-md p-2 border-2" value={monthTicketPrice} onChange={(e) => setMonthTicketPrice(e.target.value)} />
          VND
          <Button
            onClick={() => updateMonthTicket()}
            text="Lưu"
            className="bg-orange-400/80 border border-white text-white text-xs w-20 rounded-lg hover:bg-white hover:border-orange-400 hover:text-orange-400"
          />
        </div>
        <div className="w-full flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold">Giá vé theo giờ</h3>
        </div>
        <div className="flex items-center w-full mb-4">
          <span className="w-1/6">Giá vé bắt đầu: </span>
          <div className=" flex-1 flex items-center justify-start ">
          <input type="number" className="rounded-md p-2 border-2" value={startPrice} onChange={(e) => setStartPrice(e.target.value)} />
            <span className="ml-2 w-1/5">VND</span>
            <span className="mx-2 w-2/5">áp dụng cho:</span>
            <input type="number" className="rounded-md p-2 border-2" value={hours} onChange={(e) => setHours(e.target.value)} />
            <span className="mx-2 w-1/4">giờ đầu</span>
          </div>
        </div>
        <div className="flex items-center w-full mb-4">
          <span className="w-1/6">Giá tăng thêm: </span>
          <div className=" flex-1 flex items-center justify-start ">
            <input type="number" className="rounded-md p-2 border-2" value={bonusPrice} onChange={(e) => setBonusPrice(e.target.value)} />
            <span className="ml-2">VND mỗi giờ</span>
          </div>
        </div>
        <Button
            onClick={() => updateTicket()}
            text="Lưu"
            className="bg-orange-400/80 border border-white text-white text-xs w-20 rounded-lg hover:bg-white hover:border-orange-400 hover:text-orange-400"
          />
      </div>
    </div>
  );
}

export default Tickets;
