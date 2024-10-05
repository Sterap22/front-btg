import React from 'react';

const Input = ({ label, value, onChange, type = "text" }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="shadow-md appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
};

export default Input;
