import React, { useCallback, useEffect } from "react";
import { useGlobalContext } from "./Context";
import "./Stories.css"

const Stories = () => {
  const { hits, isLoading,removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <div className="stories-div">
      {/* <h4 className="text-center pt-4 ">MY TECH NEWS POST</h4> */}
      {hits.map((curPost) => {
  const { title, author, objectID, url, num_comments } = curPost;
  return (
    <div className="row" key={objectID}> {/* Add key prop here */}
      <div className="col-4"></div>
      <div className="col-6">
        <div className="card w-75 mb-3 mt-3">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
              By <span>{author}</span> | <span>{num_comments} </span> comments
            </p>
            <div className="card-btn d-flex justify-content-between">
              <a href={url} target="_blank">
                Read More
              </a>
              <a href="#" onClick={()=>{removePost(objectID)}}>
                <span style={{ color: "red" }} >Remove</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </div>
  );
})}

      </div>
    </>
  );
};

export default Stories;
