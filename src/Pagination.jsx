import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages,getPrevPage,getNextPage } = useGlobalContext();
  return (
    <>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="pagination_btn d-flex justify-content-evenly">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => getPrevPage()}
            >
              Prev
            </button>

            <p>
              {page+1} of {nbPages}
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => getNextPage()}
            >
              Next
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Pagination;
