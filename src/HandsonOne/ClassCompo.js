import React, { Component } from "react";
import "./Compo.css"

class ClassCompo extends Component {
  render() {
    return (
      <div className="c1">
        <h1>This is My First Class-Based Component</h1>
        <p style={{color : "green"}}>This is done using Inline CSS</p>
        <p className='p1'>This is done using External CSS</p>
      </div>
    );
  }
}

export default ClassCompo;
