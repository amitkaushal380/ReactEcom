import React, { useState, useEffect } from "react";
import "./Pagination.css";

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    console.log('default',currentPage);

  useEffect(() => {
    // window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    console.log("Next click:", currentPage);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    console.log("Prev click:", currentPage);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
      console.log("Change pagination:", currentPage);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {/* show the posts, 10 posts at a time */}

      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={d.id} product={d} />
      ))}

      {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
      <div className="pagination container">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev bg-yellow-500 px-4 py-1 rounded-full text-white font-bold ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next bg-yellow-500 px-4 py-1 rounded-full text-white font-bold ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Pagination;
