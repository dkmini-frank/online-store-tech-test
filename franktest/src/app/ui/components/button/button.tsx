/**
 * @file this file is the button componet file
 * @date 2024-02-16
 * @author Frank Su
 * @lastModify  2024-02-16
 */
"use client";
import React from "react";
import style from "@/app/ui/components/button/button.module.scss";
import { useFormStatus } from "react-dom";
// define the props type for the button
interface ButtonProps {
  btnType?: "primary" | "secondary" | "confirm";
  w?: string;
  h?: string;
  content?: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
}
/**
 * this function is the button component
 * @param {string} type there are three type for button, 'primary' or 'secondary' or 'confirm', default is 'primary' type
 * @param {string} w width of the button, default '80px'
 * @param {string} h height of the button, default '38px'
 * @param {stirng} content content of the button, default 'Button'
 */
export default function Button({
  btnType = "primary",
  w = "80px",
  h = "38px",
  content = "Button",
  type = "submit",
  className,
}: ButtonProps) {
  // this hook will active isloading when doing request
  const { pending } = useFormStatus();

  /**
   * this function will select the button style
   * @param {sting} btnType the type of the button, primary, secondary or confirm
   */

  const getButtonStyle = (btnType: string) => {
    if (btnType === "primary") {
      return "#4F46E5";
    } else if (btnType === "secondary") {
      return "#16A34A";
    } else if (btnType === "danger") {
      return "#000000";
    }
  };

  return (
    <button
      style={{
        width: w,
        height: h,
        backgroundColor: `${getButtonStyle(btnType)}`,
      }}
      className={`${style.Button_common} ${className}`}
      type={type}
      disabled={pending}
    >
      {pending ? "Loading..." : content}
    </button>
  );
}
