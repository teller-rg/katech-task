import { FC } from "react";
import { Container, Typography } from "common/components";

import "./style.less";

export const Header: FC = () => {
  return (
    <header className="header">
      <Container className="d-flex align-center">
        <Typography.Title title="My Time Log" level="h1" fontSize={32} />
      </Container>
    </header>
  );
};
