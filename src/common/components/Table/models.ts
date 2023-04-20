import { ReactNode } from "react";

interface Columns {
  key: string;
  dataIndex: string;
  label: string;
  render?: (record: any) => ReactNode;
}

export interface Props {
  data: any[];
  columns: Columns[];
}