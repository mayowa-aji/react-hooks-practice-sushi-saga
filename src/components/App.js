import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [sushiList, setSushiList] = useState([]);
  const [page, setPage] = useState(4);
  const [budget, setBudget] = useState(1000)
  const [emptyList, setEmptyList] = useState([])

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((sushi) => setSushiList(sushi));
  },[])


  return (
    <div className="app">
      <SushiContainer
      sushiList={sushiList}
      setSushiList={setSushiList}
      page={page}
      setPage={setPage}
      emptyList={emptyList}
      setEmptyList={setEmptyList}
      budget={budget}
      setBudget={setBudget}
     />
      <Table
      budget={budget}
      plates={emptyList}
      set/>
    </div>
  );
}

export default App;
