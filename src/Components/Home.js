import React, { useState } from "react";

import Child from "./Child";
import Parent from "./Parent";

function Home() {
  const [inputData, setinputData] = useState();
  function handleDataChange(e) {
    setinputData(e.target.value);
  }
  return (
    <div>
      <center>
        <Child data={inputData} changeData={handleDataChange} />
        <Parent data={inputData} changeData={handleDataChange} />
      </center>
    </div>
  );
}

export default Home;
