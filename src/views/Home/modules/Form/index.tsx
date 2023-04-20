import { FC } from "react";
import { Button, Card, Input, Row, Typography } from "common/components";
import { formatDate } from "helpers/formatDate";
import { Data, mockData } from "../Logs/data";

interface Props {
  setData: any;
}

export const Form: FC<Props> = ({ setData }) => {
  const addLog = (e: any) => {
    e.preventDefault();

    const { description, timeSpent } = e.target;

    let logs: Data[] = JSON.parse(localStorage.getItem("logs") as string);

    const dateTime = new Date();
    const date = formatDate(dateTime);

    const newLog = {
      description: description.value,
      timeSpent: timeSpent.value,
      date,
      dateTime,
    };

    if (logs) {
      logs.push(newLog);
    } else {
      logs = [newLog];
    }

    localStorage.setItem("logs", JSON.stringify(logs));
    setData([...logs, ...mockData]);

    e.target.reset();
  };

  return (
    <aside>
      <form onSubmit={addLog}>
        <Row className="align-center m-b-3">
          <Card col={4}>
            <Typography.Label title="Description" />
          </Card>
          <Input type="text" name="description" placeholder="Description" />
        </Row>
        <Row className="align-center m-b-3">
          <Card col={4}>
            <Typography.Label title="Time spent" />
          </Card>
          <Input type="text" name="timeSpent" placeholder="Time spent" />
        </Row>
        <Row className="justify-end">
          <Card col={8}>
            <Button>Add</Button>
          </Card>
        </Row>
      </form>
    </aside>
  );
};
