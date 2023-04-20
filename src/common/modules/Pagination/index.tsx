import { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Props } from "./models";

import "./style.less";

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
        <li onClick={previousPage} className="page-number" key="page-prev">
          <FaChevronLeft />
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
        <li onClick={nextPage} className="page-number" key="page-next">
          <FaChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
