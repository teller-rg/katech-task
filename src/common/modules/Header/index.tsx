import { FC } from "react";
import { Container, Typography } from "common/components";

export const Header: FC = () => {
  return (
    <header>
      <Container>
        <Typography.Title title="My Time Log" level="h1" />
      </Container>
    </header>
  );
};
