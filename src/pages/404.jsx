import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <h1 className="text-6xl font-bold mb-6 text-gray-800">404</h1>
      <p className="text-xl mb-6 text-gray-800">
        The page you are looking for does not exist.
      </p>
      <button
        className="bg-gray-800 text-white rounded-full py-2 px-6 hover:bg-gray-900"
        onClick={() => window.history.back()}
      >
        <FaArrowLeft className="inline-block mr-2" />
        Go back
      </button>
    </div>
  );
};

export default NotFound;