import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  gutter?: number;
}

export const Row: FC<Props> = ({ children, gutter }) => (
  <div className="d-flex flex-wrap">{children}</div>
);
