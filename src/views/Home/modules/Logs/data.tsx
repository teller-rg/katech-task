export interface Data {
  description: string;
  timeSpent: string;
  date: string;
  time: string;
}

export const columns = [
  {
    key: "description",
    dataIndex: "description",
    label: "Description",
  },
  {
    key: "timeSpent",
    dataIndex: "timeSpent",
    label: "Time spent",
  },
  {
    key: "date",
    dataIndex: "date",
    label: "Date",
    render: (record: any) => <td>{`${record.date} ${record.time}`}</td>,
  },
];
