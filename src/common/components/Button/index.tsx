import { FC } from "react";
import classNames from "clsx";
import { Props } from "./models";
import "./style.less";

export const Button: FC<Props> = ({
  type,
  shape,
  bg,
  border,
  className,
  children,
}) => {
  const prefixCls = "btn";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-border-${border}`]: border,
    },
    className
  );

  return <button>{children}</button>;
};
