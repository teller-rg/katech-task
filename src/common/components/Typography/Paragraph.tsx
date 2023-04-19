import { FC } from "react";

interface Props {
  title: string;
}
export const Paragraph: FC<Props> = ({ title }) => (
  <p className="typography-paragraph">{title}</p>
);
