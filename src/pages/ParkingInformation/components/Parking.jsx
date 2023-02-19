import { TimePicker } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import Input from '../../../components/Input/Input';
import InputNumber from '../../../components/Input/InputNumber';
import { Button } from '../../../components';

function Parking() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm();
  const format = 'HH:mm';

  const [valueTime, setValueTime] = useState(null);
  const onChangeTime = (time) => {
    console.log('changed');
    setValueTime(time);
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    console.log(valueTime);
  });

  return (
    <div className="w-full">
      <div className="w-full pb-3 border-b-2 border-gray-300">
        <h3 className="uppercase font-semibold">nhà xe</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mt-6 flex flex-wrap flex-row">
          <div className=" pt-3 capitalize w-[20%] text-right">Tên nhà xe</div>
          <div className="w-[40%] pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                errors.name
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-400'
              }`}
              register={register}
              name="name"
              placeholder="Tên nhà xe"
              rules={{ required: 'Bát buộc' }}
              errorMessage={errors.name?.message}
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col flex-wrap sm:flex-row">
          <div className=" pt-3 capitalize sm:w-[20%] sm:text-right">
            Địa chỉ nhà xe
          </div>
          <div className="sm:w-[40%] sm:pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2 px-3 py-2 outline-none  focus:shadow-sm ${
                errors.name
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-400'
              }`}
              register={register}
              name="address"
              placeholder="Địa chỉ nhà xe"
              rules={{ required: 'Bát buộc' }}
              errorMessage={errors.address?.message}
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col flex-wrap sm:flex-row">
          <div className=" pt-3 capitalize sm:w-[20%] sm:text-right">
            Số điện thoại
          </div>
          <div className="sm:w-[40%] sm:pl-5">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <InputNumber
                  classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                    errors.phone
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-300 focus:border-orange-400'
                  }`}
                  placeholder="Số điện thoại"
                  errorMessage={errors.phone?.message}
                  {...field}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col flex-wrap sm:flex-row items-center">
          <div className=" pt-3 capitalize sm:w-[20%] sm:text-right">
            Khung giờ hoạt động
          </div>
          <div className=" pt-3 flex-1 pl-5">
            <div className="flex items-center">
              <span className="mr-3">Từ</span>
              <div>
                <TimePicker
                  value={valueTime}
                  format={format}
                  onChange={onChangeTime}
                  onSelect={(value) => {
                    console.log('select', value);
                    setValueTime(value);
                  }}
                  className=" border-gray-300 hover:border-orange-400 shadow-sm "
                />
              </div>
              <span className="mx-3">Đến</span>
              <div>
                <TimePicker
                  value={valueTime}
                  format={format}
                  onChange={onChangeTime}
                  onSelect={(value) => {
                    console.log('select', value);
                    setValueTime(value);
                  }}
                  className=" border-gray-300 hover:border-orange-400 shadow-sm "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex my-10">
          <div className="w-1/5"></div>
          <div className="w-2/5 flex justify-end">
            <Button
              onClick={onSubmit}
              text="Lưu"
              className="bg-orange-400 text-white text-xs w-40 rounded-lg hover:bg-orange-400/80"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Parking;
