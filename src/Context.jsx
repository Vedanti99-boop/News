import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

let API = "http://hn.algolia.com/api/v1/search?";

//initialstate is consider as state

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

//to create a provider function

//this children is nothing but the whole react application through provider we can get any data 

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({type:"SET_LOADING"})


    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({ type: "GET_STORIES",
      //payload is used to share extra info
    payload:{
        //hits and nbpages are just a variable
        hits: data.hits,
        nbPages: data.nbPages

    } });
    } catch (error) {
      console.log(error);
    } 
  };

  //remove post

  const removePost=(post_ID)=>{
    dispatch({type:"REMOVE_POST",payload:post_ID})
  }

  //search

  const searchPost=(searchQuery)=>{
    dispatch({type:"SEARCH_QUERY",payload:searchQuery})
    
  }

  //next page

  const getNextPage=()=>{
    dispatch({type:"NEXT_PAGE"})
  }

  //prev page

  const getPrevPage=()=>{
    dispatch({type:"PREV_PAGE"})
  }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>;
};

//to create a custom hook always use "use"

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
