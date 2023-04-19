import { FC, useEffect, useState } from "react";
import { Container, Typography } from "common/components";
import { Table } from "common/components/Table";
import { columns } from "./data";
import Pagination from "../Pagination";

interface Props {
  data: any;
}

export const Logs: FC<Props> = ({ data }) => {
  // const logs: any = JSON.parse(localStorage.getItem("logs") as string);

  const [filteredLogs, setFilteredLogs] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(6);
  const [currentLogs, setCurrentLogs] = useState([]);

  // ...

  useEffect(() => {
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    setCurrentLogs(data ? data.slice(indexOfFirstLog, indexOfLastLog) : []);
  }, [currentPage]);

  useEffect(() => {
    const filteredLogs = currentLogs
      ? currentLogs.reduce((prevLog: any, nextLog: any) => {
          (prevLog[nextLog.date] = prevLog[nextLog.date] || []).push(nextLog);

          return prevLog;
        }, {})
      : {};
    setFilteredLogs(filteredLogs);
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
      {Object.keys(filteredLogs).map((group: any) => (
        <div>
          <Typography.Title level="h2" title={group} />
          <Table data={(filteredLogs as any)[group]} columns={columns as any} />
        </div>
      ))}
      <Pagination
        logsPerPage={logsPerPage}
        totalLogs={data?.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </Container>
  );
};
