import { useState } from "react";
import { SeasonsInfo } from "../../types/Movie";
import s from "./Seasons.module.css";
import MyPagination from "../MyPagination/MyPagination";

type SeasonsInfoProps = {
  seasons: SeasonsInfo[];
};
const Seasons = (props: SeasonsInfoProps) => {
  const { seasons } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, seasons.length);

  return (
    <div>
      <h2>Список сезонов</h2>
      <ul className={s.seasonsInfo}>
        {seasons.slice(startIndex, endIndex).map((season) => (
          <li>
            <h3>{season.number} Сезон</h3>
            <p>{season.episodesCount} Серий</p>
          </li>
        ))}
      </ul>
      <MyPagination
        pageSize={pageSize}
        totalCount={seasons.length}
        currentPage={currentPage}
        onChangePage={handlePageChange}
        onChangePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default Seasons;
