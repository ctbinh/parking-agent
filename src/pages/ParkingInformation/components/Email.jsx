import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Input from '../../../components/Input/Input';
import { Button } from '../../../components';

function Email({ locationInformation }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { email: locationInformation.email } });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="w-full">
      <div className="w-full pb-3 border-b-2 border-gray-300">
        <h3 className="uppercase font-semibold">Email</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mt-6 flex flex-wrap flex-row">
          <div className=" pt-3 capitalize w-[20%] text-right">Email</div>
          <div className="w-[40%] pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                errors.email
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-400'
              }`}
              register={register}
              type="email"
              name="email"
              placeholder="you@gmail.com"
              rules={{
                required: 'Bắt buộc',
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email không đúng định dạng you@abc.com',
                },
              }}
              errorMessage={errors.email?.message}
            />
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

export default Email;
