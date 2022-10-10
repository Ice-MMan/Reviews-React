import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Button = () => {
  return (
    <>
      <span>
        <FaChevronLeft />
      </span>
      <span>
        <FaChevronRight />
      </span>
      <br />
      <button>Suprise Me</button>
    </>
  );
};

export default Button;
