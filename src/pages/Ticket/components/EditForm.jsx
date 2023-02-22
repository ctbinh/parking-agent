import {
  DatePickerComponent,
  TimePickerComponent,
} from '@syncfusion/ej2-react-calendars';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../../../components';
import Input from '../../../components/Input/Input';
import InputNumber from '../../../components/Input/InputNumber';

const dayInWeek = [
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
  'Chủ Nhật',
];

function EditForm() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [typeTicket, setTypeTicket] = useState('every-day');

  const handleChangeTicket = (e) => {
    setTypeTicket(e.target.value);
    console.log(e.target.value);
  };
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-full">
      <div className="flex items-center w-full mb-4">
        <span className="w-1/6">Loại vé: </span>
        <div className="flex-1 flex">
          <select
            name="type-ticket"
            className="h-10 w-[20%] cursor-pointer  border border-black/10 px-3 rounded-md hover:border-[#e3165b]"
            value={typeTicket}
            onChange={handleChangeTicket}
          >
            <option value="every-day" key="every-day">
              Hằng Ngày
            </option>
            <option value="day-in-week" key="day-in-week">
              Ngày trong tuần
            </option>
            <option value="specific-day" key="specific-day">
              Ngày cụ thể
            </option>
            <option value="month" key="month">
              Vé tháng
            </option>
          </select>
          {typeTicket === 'day-in-week' && (
            <select
              name="week-day"
              className="h-10 w-[20%] cursor-pointer ml-4 border border-black/10 px-3 rounded-md hover:border-[#e3165b]"
            >
              {dayInWeek.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </select>
          )}
          {typeTicket === 'specific-day' && (
            <div className=" pt-2 mx-4 w-1/5 h-10 px-2 border rounded-md border-black/10">
              <DatePickerComponent id="datepicker" placeholder="Enter date" />
            </div>
          )}
        </div>
      </div>
      {typeTicket !== 'month' && (
        <>
          <div className="flex items-center w-full mb-4">
            <span className="w-1/6">Thời gian: </span>
            <div className="flex-1 flex items-center ">
              <span className="">Từ</span>
              <div className=" pt-2 mx-4 w-1/5 border rounded-md border-black/10">
                <TimePickerComponent
                  width={'100%'}
                  id="timepicker"
                  style={{ textAlign: 'center' }}
                  value={startTime}
                  onChange={(event) => setStartTime(event.value)}
                  step={15}
                  format={'HH:mm'}
                />
              </div>
              <span className="">Đến</span>
              <div className=" pt-2 mx-4 w-1/5 border rounded-md border-black/10">
                <TimePickerComponent
                  width={'100%'}
                  id="timepicker"
                  style={{ textAlign: 'center' }}
                  value={endTime}
                  onChange={(event) => setEndTime(event.value)}
                  step={15}
                  format={'HH:mm'}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center w-full mb-4">
            <span className="w-1/6">Giá vé bắt đầu: </span>
            <div className=" flex-1 flex items-center justify-start ">
              <Input
                classNameInput={`h-10 w-full rounded-md border-2  px-3 py-2 outline-none focus:shadow-sm ${
                  errors.name
                    ? 'border-red-300 focus:border-red-500'
                    : 'border-black/10 focus:border-[#e3165b]'
                }`}
                className="flex items-center w-1/5"
                register={register}
                name="start_price"
                placeholder=""
                rules={{ required: 'Bắt buộc' }}
                errorMessage={errors.start_price?.message}
              />
              <span className="ml-2">VND</span>
              <span className="mx-2">áp dụng cho</span>
              <Controller
                control={control}
                name="hour"
                render={({ field }) => (
                  <InputNumber
                    classNameInput={` h-10 w-full rounded-md border-2  px-3 py-2 outline-none focus:shadow-sm ${
                      errors.hour
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-black/10 focus:border-[#e3165b]'
                    }`}
                    placeholder="Nhập số giờ"
                    className="flex items-center w-1/5"
                    errorMessage={errors.hour?.message}
                    {...field}
                    onChange={field.onChange}
                  />
                )}
              />
              <span className="mx-2">giờ đầu</span>
            </div>
          </div>
          <div className="flex items-center w-full mb-4">
            <span className="w-1/6">Giá tăng thêm: </span>
            <div className=" flex-1 flex items-center justify-start ">
              <Input
                classNameInput={`h-10 w-full rounded-md border-2  px-3 py-2 outline-none focus:shadow-sm ${
                  errors.name
                    ? 'border-red-300 focus:border-red-500'
                    : 'border-black/10 focus:border-[#e3165b]'
                }`}
                className="flex items-center w-1/5"
                register={register}
                name="start_price"
                placeholder=""
                rules={{ required: 'Bắt buộc' }}
                errorMessage={errors.start_price?.message}
              />
              <span className="ml-2">VND</span>
              <span className="mx-2">áp dụng cho</span>
              <Controller
                control={control}
                name="hour"
                render={({ field }) => (
                  <InputNumber
                    classNameInput={` h-10 w-full rounded-md border-2  px-3 py-2 outline-none focus:shadow-sm ${
                      errors.hour
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-black/10 focus:border-[#e3165b]'
                    }`}
                    placeholder="Nhập số giờ"
                    className="flex items-center w-1/5"
                    errorMessage={errors.hour?.message}
                    {...field}
                    onChange={field.onChange}
                  />
                )}
              />
              <span className="mx-2">giờ</span>
            </div>
          </div>
        </>
      )}
      {typeTicket === 'month' && (
        <>
          <div className="flex items-center w-full mb-4">
            <span className="w-1/6">Giá vé: </span>
            <div className="flex-1 flex items-center ">
              <div className=" w-1/5 rounded-md ">
                <Input
                  classNameInput={`h-10 w-full rounded-md border-2 px-3 py-2 outline-none focus:shadow-sm ${
                    errors.name
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-black/10 focus:border-[#e3165b]'
                  }`}
                  register={register}
                  className="flex items-center"
                  name="month_price"
                  placeholder=""
                  rules={{ required: 'Bắt buộc' }}
                  errorMessage={errors.month_price?.message}
                />
              </div>
              <span className="ml-4">VND/tháng</span>
            </div>
          </div>
        </>
      )}
      <div className="w-full flex my-10 justify-end">
        <Button
          onClick={() => {}}
          text="Lưu"
          className="bg-orange-400 text-white text-xs w-40 rounded-lg hover:bg-orange-400/80"
        />
      </div>
    </div>
  );
}

export default EditForm;
