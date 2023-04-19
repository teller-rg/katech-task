import { FC } from "react";

interface Props {
  title: string;
}
export const Label: FC<Props> = ({ title }) => (
  <label className="typography-label">{title}</label>
);
