"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>Explore Cars</span>
    </button>
  );
};

export default CustomButtom;
