import { FC, useRef } from "react";
import { Button, Input } from "common/components";
import { formatDate, formatTime } from "helpers/formatDate";

interface Props {
  setData: any;
}

export const Form: FC<Props> = ({ setData }) => {
  const addLog = (e: any) => {
    e.preventDefault();

    const { description, timeSpent } = e.target;

    let logs: any = JSON.parse(localStorage.getItem("logs") as string);

    const dateTime = new Date();
    const date = formatDate(dateTime);
    const time = formatTime(dateTime);

    const newLog = {
      description: description.value,
      timeSpent: timeSpent.value,
      date,
      time,
    };

    if (logs) {
      logs.push(newLog);
    } else {
      logs = [newLog];
    }

    localStorage.setItem("logs", JSON.stringify(logs));
    setData(logs);

    e.target.reset();
  };

  return (
    <aside>
      <form onSubmit={addLog}>
        <Input
          type="text"
          name="description"
          placeholder="Description"
          label="Description"
        />
        <Input
          type="text"
          name="timeSpent"
          placeholder="Time spent"
          label="Time spent"
        />
        <Button type="submit">Add</Button>
      </form>
    </aside>
  );
};
