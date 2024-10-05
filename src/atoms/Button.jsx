import React from 'react';

const Button = ({ text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-md flex items-center justify-center gap-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
