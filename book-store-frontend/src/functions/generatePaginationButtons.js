/** @format */
import React from "react";

export const generatePaginationButtons = (
  handlePageChange,
  currentPage,
  booksToDisplay,
) => {
  const buttons = [];
  const maxButtonsToShow = 3;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(booksToDisplay.length / itemsPerPage);

  if (currentPage > 1) {
    buttons.push(
      <button
        key='prev'
        onClick={() => handlePageChange(currentPage - 1)}
        className='btn btn-outline-primary mr-1'
      >
        Previous
      </button>,
    );
  }

  if (totalPages > maxButtonsToShow && currentPage > maxButtonsToShow - 1) {
    buttons.push(
      <span key='ellipsis-prev' className='mx-1'>
        ...
      </span>,
    );
  }

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(currentPage + 1, totalPages);

  if (currentPage <= maxButtonsToShow) {
    endPage = maxButtonsToShow;
  } else if (currentPage >= totalPages - maxButtonsToShow + 1) {
    startPage = totalPages - maxButtonsToShow + 1;
  }

  for (let page = startPage; page <= endPage; page++) {
    buttons.push(
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`btn btn-primary mx-1 ${
          currentPage === page ? "active" : ""
        }`}
      >
        {page}
      </button>,
    );
  }

  if (
    totalPages > maxButtonsToShow &&
    currentPage < totalPages - maxButtonsToShow + 1
  ) {
    buttons.push(
      <span key='ellipsis-next' className='mx-1'>
        ...
      </span>,
    );
  }

  if (currentPage < totalPages) {
    buttons.push(
      <button
        key='next'
        onClick={() => handlePageChange(currentPage + 1)}
        className='btn btn-outline-primary ml-1'
      >
        Next
      </button>,
    );
  }

  return buttons;
};
