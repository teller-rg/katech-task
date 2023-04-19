import { FC } from "react";
import classNames from "clsx";
import { Props } from "./models";
import "./style.less";
import { Row } from "../Row";

export const Input: FC<Props> = ({
  type,
  name,
  placeholder,
  label,
  className,
}) => {
  return (
    <Row>
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </Row>
  );
};
