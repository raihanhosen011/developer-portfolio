"use client"

import React, { FC } from "react";
import Link from "next/link";
//
import twFocusClass from "@utils/twFocusClass";
import { cx } from "@config/constants";
import { ButtonProps } from "@config/types";


const Button: FC<ButtonProps> = ({
  className = "",
  translate = "",
  sizeClass = "px-[20px] md:px-[27px] py-[13px] md:py-[13px]",
  fontSize = "",
  disabled = false,
  href,
  children,
  targetBlank,
  type,
  loading,
  secondary,
  outlined,
  onClick = () => {},
}) => {
  const CLASSES = cx(
     "relative text-white h-auto inline-flex items-center text-[14px] text-slate-800 md:text-[16px] justify-center rounded-full transition-all font-medium bg-sky-400 hover:bg-sky-300 duration-300 ",
     disabled && '!bg-disable hover:!bg-disable cursor-not-allowed',
     loading && 'cursor-not-allowed !bg-disable hover:!bg-disable',
     fontSize,
     sizeClass,
     translate,
     className,
     twFocusClass(true)
  )

  const OUTLINED_CLASS = 
    `!bg-transparent border border-[1.2px] !text-sky-400 border-sky-400 hover:!bg-sky-400/10`

  const SECONDAY_CLASS = 
    `!bg-slate-800 hover:!bg-slate-700 active:!text-slate-400 !text-slate-200`

  const _renderLoading = () => {
    return (
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  };


  if (!!href) {
    return (
      <Link
        href={`${href}`}
        rel="noopener noreferrer"
        className={cx(
          CLASSES,
          outlined && OUTLINED_CLASS,
          secondary && SECONDAY_CLASS
        )}
        onClick={onClick}
        target={targetBlank ? "_blank" : undefined}
      >
        {children || `This is Link`}
      </Link>
    );
  }
  

  return (
    <button
      disabled={disabled || loading}
      className={cx(
        CLASSES,
        outlined && OUTLINED_CLASS,
        secondary && SECONDAY_CLASS
      )}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;