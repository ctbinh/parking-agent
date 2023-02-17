import React from "react";
import { Button } from "../components";
import ClickableText from "../components/ClickableText";
import TextInput from "../components/TextInput";
import { useStateContext } from "../contexts/ContextProvider";
import { loginImage } from "../data";

const Login = () => {
  const { currentColor } = useStateContext();
  const login = () => {
  };
  return (
    <div className="w-screen h-screen flex">
      <div className={`w-6/12 h-screen items-center flex justify-center bg-[${currentColor}]`}>
        <img src={loginImage} alt="login" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-evenly py-28 px-14">
        <h1 className="text-center font-bold text-xl">Đăng nhập</h1>
        <div className="w-full">
          <TextInput fieldName={"Username"} />
          <TextInput type={"password"} fieldName={"Password"} />
          <ClickableText
            onClick={() => {
              console.log("hello");
            }}
            text={"Forgot password?"}
            textAlign={"right"}
            width={"full"}
            styleCustom={"mb-4"}
            color={"#50d71e"}
          />
        </div>
        <Button onClick={login} color="white" bgColor={currentColor} text="Sign In" borderRadius="10px" width={"full"} />
      </div>
    </div>
  );
};

export default Login;
