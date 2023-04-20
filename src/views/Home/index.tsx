import { FC, useState } from "react";
import { Card, Container, Row } from "common/components";
import { Logs } from "./modules/Logs";
import { Form } from "./modules/Form";
import { Data, mockData } from "./modules/Logs/data";

export const Home: FC = () => {
  const logs = JSON.parse(localStorage.getItem("logs") as string);
  const [data, setData] = useState<Data[]>([...logs, ...mockData]);

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
