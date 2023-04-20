import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  gutter?: number;
  className?: string;
}