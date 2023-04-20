export interface Props {
  logsPerPage: number;
  totalLogs: number;
  paginate: (number: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}