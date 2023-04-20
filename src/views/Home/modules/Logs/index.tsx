import { FC, useEffect, useState } from "react";
import { Container, Typography } from "common/components";
import { Table } from "common/components/Table";
import { Data, columns } from "./data";
import Pagination from "../../../../common/modules/Pagination";
import { formatDate } from "helpers/formatDate";

interface Props {
  data: any;
}

export const Logs: FC<Props> = ({ data }) => {
  const [sortedData, setSortedData] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(6);
  const [currentLogs, setCurrentLogs] = useState([]);

  useEffect(() => {
    setSortedData(
      data
        ? data.sort(
            (a: Data, b: Data) =>
              Number(new Date(b.dateTime)) - Number(new Date(a.dateTime))
          )
        : []
    );
  }, [data]);

  useEffect(() => {
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;

    setCurrentLogs(sortedData.slice(indexOfFirstLog, indexOfLastLog));
  }, [currentPage, sortedData]);

  useEffect(() => {
    setFilteredLogs(
      currentLogs
        ? currentLogs.reduce((prevLog: any, nextLog: any) => {
            (prevLog[nextLog.date] = prevLog[nextLog.date] || []).push(nextLog);

            return prevLog;
          }, {})
        : {}
    );
  }, [currentLogs]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(data?.length / logsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      {Object.keys(filteredLogs).map((group: string) => (
        <div key={group}>
          <Typography.Title
            level="h2"
            title={group == formatDate(new Date()) ? "Today" : group}
            fontSize={24}
          />
          <Table data={(filteredLogs as any)[group]} columns={columns} />
        </div>
      ))}
      {data && (
        <Pagination
          logsPerPage={logsPerPage}
          totalLogs={data?.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </Container>
  );
};
