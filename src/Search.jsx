import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      {/* <h1>website</h1> */}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <div>
        <input type="text" placeholder='Search' value={query} onChange={(e)=>searchPost(e.target.value)} />
      </div> */}
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="mb-3">
              <input
                type="text"
                className="form-control mx-4 mt-5"
                id="exampleFormControlInput1"
                value={query}
                onChange={(e) => searchPost(e.target.value)}
                placeholder="'Search'"
              />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </form>
    </>
  );
};

export default Search;
