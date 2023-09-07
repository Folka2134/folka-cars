"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>Explore Cars</span>
    </button>
  );
};

export default CustomButtom;
