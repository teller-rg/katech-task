import { FC } from "react";
import { Props } from "./models";
import { Typography } from "../Typography";

import "./style.less";

export const Table: FC<Props> = ({ data, columns }) => (
  <table className="table">
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key}>
            <Typography.Label
              title={column.label}
              color="secondary"
              fontWeight={700}
            />
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((record) => (
        <tr key={record.dateTime}>
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
