import React from 'react'
import "./Compo.css"

function FuncCompo(){
return(
    <div className='f1'>
        <h1>This is created using Functional Component</h1>
        <p style={{color : "red"}}>This is done using Inline CSS</p>
        <p className='p1'>This is done using External CSS</p>
    </div>
)
}

export default FuncCompo;