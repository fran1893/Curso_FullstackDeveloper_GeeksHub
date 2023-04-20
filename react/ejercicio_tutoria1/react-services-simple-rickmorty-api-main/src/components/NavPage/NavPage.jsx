import React, { useState } from "react";

export default function NavPage({ page, pages, setPage }) {
   // hooks

   // handlers
   const handleNext = () => {
      if (page < pages) setPage(() => page + 1);
   };

   const handlePrev = () => {
      if (page > 1) setPage(() => page - 1);
   };

   return (
      <div>
         <button disabled={page == 1} onClick={handlePrev}>
            prev
         </button>
         <span className="page">
            {" "}
            page {page} of {pages}
         </span>{" "}
         <button disabled={page == pages} onClick={handleNext}>
            next
         </button>
      </div>
   );
}
