import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-rose-600 py-2 px-8 rounded-full max-w-max font-primary hover:-translate-y-1 transition-transform duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default Button;
