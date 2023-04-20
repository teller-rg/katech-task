import { FC } from "react";
import classNames from "clsx";
import { TitleProps } from "./models";

export const Title: FC<TitleProps> = ({
  title,
  level = "h6",
  className,
  fontSize = 16,
  fontWeight = 400,
  color = "primary",
}) => {
  const Level = level as any;

  const prefixCls = "typography";
  const classes = classNames(
    prefixCls,
    "typography-title",
    {
      [`${prefixCls}-size-${fontSize}`]: fontSize,
      [`${prefixCls}-weight-${fontWeight}`]: fontWeight,
      [`${prefixCls}-color-${color}`]: color,
    },
    className
  );

  return <Level className={classes}>{title}</Level>;
};
