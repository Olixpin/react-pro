import React from "react";
import "./Pagination.css";
import { context } from "../context";
import { useContext, useState, useEffect } from "react";

const Pagination = () => {
  const { loading, users, selectedUsers, page, setPage, pages } =
    useContext(context);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const RenderPage = () => {
    return (
      <div className="pagination">
        <button
          className="pagination__btn prevBtn"
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="pagination__page">
          <span>{currentPage}</span>
          <span>of</span>
          {/* generate buttons for each page */}
          {pages.map((page) => {
            return (
              <button
                key={page}
                className="pagination__btn pageNumber"
                aria-label={`Go to page ${page}`}
                onClick={() => setPage(page)}
                style={{
                  backgroundColor: page === currentPage ? "#111" : "#fff",
                  color: page === currentPage ? "#fff" : "#111",
                }}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          className="pagination__btn nextBtn"
          aria-label={`Go to page ${currentPage + 1}`}
          onClick={() => setPage(currentPage + 1)}
          disabled={
            currentPage === pages.length || pages.length === 0 ? true : false
          }
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="Pagination">
      <RenderPage />
    </div>
  );
};

export default Pagination;
