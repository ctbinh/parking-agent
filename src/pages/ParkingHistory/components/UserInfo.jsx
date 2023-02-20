import React from 'react';

const UserInfo = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <img
          src="https://vcdn1-thethao.vnecdn.net/2023/02/13/ronaldo-al-nassr-jpeg-16763040-5020-1825-1676304156.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=-1Qmhqssrz4CaNC1Szs5GA"
          alt="avatar"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col text-base ml-4">
        <div className="mb-2">
          <label className="font-medium">Tên: </label>
          <label> Cao Thanh Binh</label>
        </div>
        <div className="mb-2">
          <label className="font-medium">SĐT:</label>
          <label> 0372358493</label>
        </div>
        <div className="mb-2">
          <label className="font-medium">Email:</label>
          <label> binh17122001@gmail.com</label>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
