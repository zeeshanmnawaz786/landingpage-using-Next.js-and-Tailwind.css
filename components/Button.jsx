import React from "react";

function Button({ text }) {
  return (
    <button className="bg-red-600 hover:bg-red-800 text-white text-xs xl:text-lg py-2 px-4 sm:mr-2  border rounded-md shadow">
      {text}
    </button>
  );
}

export default Button;
