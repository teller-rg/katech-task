import { FC } from "react";
import classNames from "clsx";
import { LabelProps } from "./models";

export const Label: FC<LabelProps> = ({
  title,
  className,
  fontSize = 16,
  fontWeight = 400,
  color = "primary",
}) => {
  const prefixCls = "typography";
  const classes = classNames(
    prefixCls,
    "typography-label",
    {
      [`${prefixCls}-size-${fontSize}`]: fontSize,
      [`${prefixCls}-color-${color}`]: color,
      [`${prefixCls}-weight-${fontWeight}`]: fontWeight,
    },
    className
  );

  return <label className={classes}>{title}</label>;
};
