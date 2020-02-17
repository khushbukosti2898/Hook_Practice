import React, { useState } from 'react';

function Count(props){
    //let [btntext,setButtonText]=useState(props.btntext);
    let [count,setCount]=useState(props.count);
    
    return(
        <div>
            <button onClick={()=>setCount(props.setCount)}>{props.count}</button>
        </div>
    )
}
export default Count;