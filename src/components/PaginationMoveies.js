import React from "react";
import ReactPaginate from "react-paginate";


export const PaginationMoveies = ({getPage,pageCount}) => {
  const handlePageClick = (data) => {
    getPage(data.selected +1);
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
