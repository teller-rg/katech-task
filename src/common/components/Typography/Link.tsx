import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import classNames from "clsx";
import { LinkProps } from "./models";

export const Link: FC<LinkProps> = ({
  to,
  title,
  className,
  fontSize = 16,
  fontWeight = 400,
  color = "primary",
}) => {
  const prefixCls = "typography";
  const classes = classNames(
    prefixCls,
    "typography-link",
    {
      [`${prefixCls}-size-${fontSize}`]: fontSize,
      [`${prefixCls}-weight-${fontWeight}`]: fontWeight,
      [`${prefixCls}-color-${color}`]: color,
    },
    className
  );

  return (
    <RouterLink to={to} className={classes}>
      {title}
    </RouterLink>
  );
};
