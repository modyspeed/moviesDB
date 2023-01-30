import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getPaginationMovies } from "../redux/action/MoviesAction";
import { useSelector, useDispatch } from "react-redux";

export const PaginationMoveies = () => {
  const [pageCount, setPageCount] = useState(0);
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  useEffect(() => {
    setPageCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(getPaginationMovies(data.selected + 1));
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination  justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};
