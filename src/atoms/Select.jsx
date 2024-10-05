import React from 'react';

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="shadow-md appearance-none border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
