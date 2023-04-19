import { FC, useEffect, useState } from "react";
import { Card, Container, Row } from "common/components";
import { Logs } from "./modules/Logs";
import { Form } from "./modules/Form";

export const Home: FC = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("logs") as string)
  );

  return (
    <Container>
      <Row>
        <Card col={8}>
          <Logs data={data} />
        </Card>
        <Card col={4}>
          <Form setData={setData} />
        </Card>
      </Row>
    </Container>
  );
};
