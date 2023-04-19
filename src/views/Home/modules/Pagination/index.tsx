import { FC } from "react";

interface Props {
  logsPerPage: number;
  totalLogs: number;
  paginate: (number: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const Pagination: FC<Props> = ({
  logsPerPage,
  totalLogs,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li onClick={previousPage} className="page-number">
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="page-number"
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
