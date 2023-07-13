import React, { useState } from "react";
import "./App.css";
import FuncCompo from "./HandsonOne/FuncCompo";
import ClassCompo from "./HandsonOne/ClassCompo";

function App() {
  const [fState, setFState] = useState(false);
  const [cState, setCState] = useState(false);
  console.log(fState);
  return (
    <>
      <h1 className="h1">Styling using Functional and Class Components</h1>

      <button className="b1" onClick={() => setFState(!fState)}>
        To see styling in Function component
      </button>

      <button className="b2" onClick={() => setCState(!cState)}>
        To see styling in Class component
      </button>
      {/* {fState ? <FuncCompo /> : " "} */}
      {fState && <FuncCompo />}
      {cState && <ClassCompo />}
    </>
  );
}

export default App;
