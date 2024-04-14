import { Pagination } from "antd";

type PaginationProps = {
  pageSize: number;
  currentPage: number;
  totalCount: number;
  onChangePage: (page: number) => void;
  onChangePageSize: (current: number, size: number) => void;
}

const MyPagination = ({ pageSize, totalCount, currentPage, onChangePage, onChangePageSize } : PaginationProps) => {
  return ( 
    <>
      <Pagination 
        pageSize={pageSize} 
        total={totalCount} 
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultCurrent={1}
        current={currentPage}
        onChange={(page) => onChangePage(page)}
        onShowSizeChange={(current, size) => onChangePageSize(current, size)}
        hideOnSinglePage
      />
    </> 
  );
}
 
export default MyPagination;