import React from "react";
import "./pagination.style.css";

const pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="navbar">
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-Item">
            <a onClick={() => paginate(number)} href="!*" className="page-link">
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pagination;
