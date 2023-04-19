import { FC } from "react";

interface Props {
  title: string;
  level: string;
}

export const Title: FC<Props> = ({ title, level }) => {
  const Level = level as any;

  return <Level className="typography-title">{title}</Level>;
};
