import proptypes from "prop-types";
import React from "react";

const Child=({roll,name,fees,subject})=>{
    return(<>
    <h1>Child component is running</h1>
    <h2>Roll No. : {roll}</h2>
    <h2>Name     : {name}</h2>
    <h2>Fees     : {fees}</h2>
    <h2>Subjects : {subject}</h2>
    </>
    )
}
Child.propTypes={
    roll:proptypes.number,
    name:proptypes.string,
    fees:proptypes.number,
    subject:proptypes.array
}
Child.defaultProps={
    roll:1,
    name:'fullsatck',
    fees:250000,
    subject:['frontend, backend, database']
}
export{Child};