import { FC } from "react";
import classNames from "clsx";
import { Props } from "./models";
import "./style.less";

export const Button: FC<Props> = ({
  htmlType = "submit",
  className,
  type = "primary",
  shape = "round",
  children,
}) => {
  const prefixCls = "btn";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${htmlType}`]: htmlType,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
    },
    className
  );

  return <button className={classes}>{children}</button>;
};
