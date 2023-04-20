import { FC } from "react";
import { Props } from "./models";

export const Container: FC<Props> = ({ children, className }) => (
  <div className={`${className} container`}>{children}</div>
);
