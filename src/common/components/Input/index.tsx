import { FC } from "react";
import classNames from "clsx";
import { Props } from "./models";
import "./style.less";

export const Input: FC<Props> = ({ type, name, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${className} input`}
    />
  );
};
