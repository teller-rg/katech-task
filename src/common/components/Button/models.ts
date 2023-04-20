import { ReactNode } from "react";

type HtmlType = "submit";
type Type = "primary";
type Shape = 'round';

export interface Props {
  htmlType?: HtmlType;
  type?: Type;
  shape?: Shape;
  className?: string;
  children: string | ReactNode;
}
