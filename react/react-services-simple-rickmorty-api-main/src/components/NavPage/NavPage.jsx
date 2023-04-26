import React, { useState } from "react";
import "./NavPage.scss";
import { useDispatch } from "react-redux";

export default function NavPage({ page, pages, increment, decrement }) {
  // hooks
  const dispatch = useDispatch();
  // handlers
  const handleNext = () => {
    if (page < pages) {dispatch(increment)};
  };

  const handlePrev = () => {
    if (page > 1) {dispatch(decrement)};
  };

  return (
    <div className="NavPage">
      <button disabled={page == 1} onClick={handlePrev}>
        prev
      </button>
      <span className="page">
        page {page} of {pages}
      </span>
      <button disabled={page == pages} onClick={handleNext}>
        next
      </button>
    </div>
  );
}
