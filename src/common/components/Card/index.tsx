import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  col?: number;
}

export const Card: FC<Props> = ({ children, col }) => (
  <div className={`col-${col}`}>{children}</div>
);
