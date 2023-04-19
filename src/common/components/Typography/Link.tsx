import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  to: string;
  title: string;
}
export const Link: FC<Props> = ({ to, title }) => (
  <RouterLink to={to} className="typography-link">
    {title}
  </RouterLink>
);
