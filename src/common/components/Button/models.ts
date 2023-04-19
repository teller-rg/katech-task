import { ReactNode } from "react";

export type Type = "submit";

export type Shape = "round";

export type Bg = "transparent";

export type Border = "danger" | "primary";

export interface Props {
  type: Type;
  shape?: Shape;
  bg?: Bg;
  border?: Border;
  children: string | ReactNode;
  className?: string;
}
