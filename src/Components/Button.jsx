import React from "react";

const buttonStyle =
  "bg-blue-600 text-white py-2 px-2 flex-1 cursor-pointer transition hover:bg-blue-400";
const activeButtonStyle =
  "bg-white text-blue-600 font-bold py-2 px-2 flex-1 cursor-pointer";

function Button({
  value,
  otherClasses,
  activeSize,
  setSize,
  children,
  repeat,
  activeAxis,
  setRepeat,
}) {
  if (!repeat) {
    return (
      <button
        data-size={value}
        className={`${otherClasses} 
                  ${activeSize === value ? activeButtonStyle : buttonStyle}`}
        onClick={(e) => setSize(e.target.dataset.size)}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      data-size={value}
      className={`${otherClasses} 
                  ${activeAxis === value ? activeButtonStyle : buttonStyle}`}
      onClick={(e) => setRepeat(e.target.dataset.size)}
    >
      {children}
    </button>
  );
}

export default Button;
