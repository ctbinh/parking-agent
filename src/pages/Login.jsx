import React, { useEffect, useState } from 'react';
import { Button } from '../components';
import TextInput from '../components/TextInput';
import { useStateContext } from '../contexts/ContextProvider';
import { loginImage } from '../data';
import { useLocation, useNavigate } from 'react-router-dom';
import { authentication } from '../utils/authentication';

const Login = () => {
  const { currentColor, setLogin, authenticated } = useStateContext();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const login = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('Login successfully!');
      authentication.saveLoginLocalStorage();
      setLogin();
      navigate('/dashboard');
    }
  };
  useEffect(() => {
    if (authentication.getLoginLocalStorage()) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, []);
  return (
    <div className="w-screen h-screen flex">
      <div
        className={`w-6/12 h-screen items-center flex justify-center bg-[${currentColor}]`}
        style={{ backgroundColor: currentColor }}
      >
        <img src={loginImage} alt="login" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-evenly py-28 px-14">
        <h1 className="text-center font-bold text-xl">Đăng nhập</h1>
        <div className="w-full">
          <TextInput
            fieldName={'Username'}
            value={username}
            handleChange={setUsername}
          />
          <TextInput
            type={showPassword ? 'text' : 'password'}
            fieldName={'Password'}
            value={password}
            handleChange={setPassword}
          />
          <div className="flex text-sm font-medium">
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={showPassword}
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                  onChange={() => setShowPassword(!showPassword)}
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-gray-900 dark:text-gray-300"
              >
                Show password
              </label>
            </div>
            <label className="text-right ml-auto text-gray-400 cursor-pointer">
              Forgot password?
            </label>
          </div>
        </div>
        <Button
          onClick={login}
          color="white"
          bgColor={currentColor}
          text="Sign In"
          borderRadius="10px"
          width={'full'}
        />
      </div>
    </div>
  );
};

export default Login;
