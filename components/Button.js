import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} py-2 px-6 lg:py-3 lg:px-8 font-medium rounded-md border-2 lg:mt-10 mt-6 my-auto mr-4 lg:m-0`}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
