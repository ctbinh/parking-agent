import React, { useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

import Input from "../../../components/Input/Input";
import { Button } from "../../../components";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="w-full">
      <div className="w-full pb-3 border-b-2 border-gray-300">
        <h3 className="uppercase font-semibold">Đổi mật khẩu</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mt-6 flex flex-wrap flex-row">
          <div className=" pt-3 capitalize w-[20%] text-right">
            Mật khẩu hiện tại
          </div>
          <div className="w-[40%] pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                errors.current_password
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-orange-400"
              }`}
              register={register}
              type="password"
              name="current_password"
              rules={{
                required: "Bắt buộc",
              }}
              errorMessage={errors.current_password?.message}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap flex-row">
          <div className=" pt-3 capitalize w-[20%] text-right">
            Mật khẩu mới
          </div>
          <div className="w-[40%] pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                errors.new_password
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-orange-400"
              }`}
              register={register}
              type="password"
              name="new_password"
              rules={{
                required: "Bắt buộc",
              }}
              errorMessage={errors.new_password?.message}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap flex-row">
          <div className=" pt-3 capitalize w-[20%] text-right">
            Xác nhận mật khẩu mới
          </div>
          <div className="w-[40%] pl-5">
            <Input
              classNameInput={`w-full rounded-lg border-2  px-3 py-2 outline-none focus:shadow-sm ${
                errors.confirm_password
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-orange-400"
              }`}
              register={register}
              type="password"
              name="confirm_password"
              rules={{
                required: "Bắt buộc",
              }}
              errorMessage={errors.confirm_password?.message}
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

export default ChangePassword;
