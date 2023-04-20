import { Typography } from "common/components";
import { formatTime } from "helpers/formatDate";

export interface Data {
  description: string;
  timeSpent: string;
  date: string;
  dateTime: Date | string;
}

export const columns = [
  {
    key: "description",
    dataIndex: "description",
    label: "Description",
    render: (record: Data) => (
      <td key="description">
        <Typography.Paragraph title={record.description} color="secondary" />
      </td>
    ),
  },
  {
    key: "timeSpent",
    dataIndex: "timeSpent",
    label: "Time spent",
    render: (record: Data) => (
      <td key="timeSpent">
        <Typography.Paragraph title={record.timeSpent} color="secondary" />
      </td>
    ),
  },
  {
    key: "date",
    dataIndex: "date",
    label: "Date",
    render: (record: Data) => (
      <td key="date">
        <Typography.Paragraph
          title={`${record.date} ${formatTime(new Date(record.dateTime))}`}
          color="secondary"
        />
      </td>
    ),
  },
];

export const mockData: Data[] = [
  {
    description: "Listening to president",
    timeSpent: "5m",
    dateTime: "2023-03-20T13:23:25.100Z",
    date: "20.03.2023",
  },
  {
    description: "Party as hell",
    timeSpent: "23h",
    dateTime: "2023-03-20T13:30:25.100Z",
    date: "20.03.2023",
  },
  {
    description: "Sleep",
    timeSpent: "1h 30m",
    dateTime: "2023-03-21T13:30:25.100Z",
    date: "21.03.2023",
  },
  {
    description: "Went to shop",
    timeSpent: "2h 25m",
    dateTime: "2023-03-22T13:30:25.100Z",
    date: "22.03.2023",
  },
  {
    description: "Did nothing",
    timeSpent: "5h",
    dateTime: "2023-03-22T18:30:25.100Z",
    date: "22.03.2023",
  },
  {
    description: "Bath",
    timeSpent: "10m",
    dateTime: "2023-03-22T19:30:25.100Z",
    date: "22.03.2023",
  },
];
