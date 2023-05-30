import "./App.css";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
// import { AppContext } from './Context'
// import { useContext } from 'react'
// import { useGlobalContext } from './Context'

function App() {
  return (
    <>
      <div className="body">
        <Search />
        <Pagination />
        <Stories />
      </div>
    </>
  );
}

export default App;
