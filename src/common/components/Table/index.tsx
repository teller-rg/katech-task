import { FC, ReactNode } from "react";

interface Columns {
  key: string;
  dataIndex: string;
  label: string;
  render?: (record: any) => ReactNode;
}

interface Props {
  data: any[];
  columns: Columns[];
}

export const Table: FC<Props> = ({ data, columns }) => (
  <table>
    <thead>
      {columns.map((column) => (
        <th key={column.key}>{column.label}</th>
      ))}
    </thead>
    <tbody>
      {data.map((record) => (
        <tr>
          {columns.map((column) =>
            column.render ? (
              column.render(record)
            ) : (
              <td key={column.key}>{record[column.dataIndex]}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
