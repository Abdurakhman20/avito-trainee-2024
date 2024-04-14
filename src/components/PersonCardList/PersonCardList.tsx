import { useState } from "react";

import s from "./PersonCardList.module.css";
import { Person } from "../../types/Person";
import PersonCard from "../PersonCard/PersonCard";
import MyPagination from "../MyPagination/MyPagination";

type Props = {
  persons: Person[];
};

const PersonCardList = (props: Props) => {
  const { persons } = props;
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
  const endIndex = Math.min(startIndex + pageSize, persons.length);

  return (
    <div className={s.wrapper}>
      <h2 className={s.persons_title}>Список Актеров</h2>
      <ul className={s.persons_list}>
        {persons.slice(startIndex, endIndex).map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </ul>
      <MyPagination
          pageSize={pageSize}
          totalCount={persons.length}
          currentPage={currentPage}
          onChangePage={handlePageChange}
          onChangePageSize={handlePageSizeChange}
        />
    </div>
  );
};

export default PersonCardList;
