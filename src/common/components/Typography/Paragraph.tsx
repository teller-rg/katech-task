import { FC } from "react";
import classNames from "clsx";
import { ParagraphProps } from "./models";

export const Paragraph: FC<ParagraphProps> = ({
  title,
  className,
  fontSize = 16,
  fontWeight = 400,
  color = "primary",
}) => {
  const prefixCls = "typography";
  const classes = classNames(
    prefixCls,
    "typography-paragraph",
    {
      [`${prefixCls}-size-${fontSize}`]: fontSize,
      [`${prefixCls}-weight-${fontWeight}`]: fontWeight,
      [`${prefixCls}-color-${color}`]: color,
    },
    className
  );

  return <p className={classes}>{title}</p>;
};
