import { FC } from "react";
import { Props } from "./models";

export const Row: FC<Props> = ({ children, gutter, className }) => (
  <div className={`${className} d-flex flex-wrap`}>{children}</div>
);
