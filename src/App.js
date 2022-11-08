import React from "react";
import { Child } from "./component/Child";
let rl=101;
let fee=250000;
let sub=['java, python']
const App=()=>{
  return(<>
  <Child roll={rl} name='Ajay' fees={fee} subject={sub}/>
  <Child/>
  </>)
}
export default App;
