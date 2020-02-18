import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

/* function Count(){
    // let [btntext,setButtonText]=useState("please Click Me");
    let [count,setCount]=useState(0);
    let [age,setAge]=useState(0);
    let [name,setName]=useState("Hiiii");

    useEffect(() =>{console.log("count hange")},[count])
    // useEffect(() =>{console.log("second clicked")},[age])
    
    return(
        <div>
            count:{count}
            <button onClick={()=>setCount(count+1)}>Increase count</button><br/>
            Age: {age}
            <button onClick={()=>setAge(age+1)}>Increase age</button><br/>
            name:{name}
            <button onClick={()=>setName("By")}>change</button><br/>
        </div>
    )
}
export default Count; */

/* function Effect(props) {
    useEffect(() => {
      console.log("MOUNT", props);
      return () => console.log("UNMOUNT", props)
    }, []);
    return null;
  }
  function App(){
      let [name,setName] =useState("Khushbu");
      let [checkState,setCheckState]=useState(true)
      return(<>
      <input type="checkbox" checked={checkState} onChange={()=>setCheckState(!checkState)}/>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      {checkState && <Effect name={name}/>}
      </>)
  }
  export default App; */

  /* function App() {
    const first = useRef(null);
    const second = useRef(null);

    const onButtonClick = () => {
        first.current.focus();
        second.current.focus();
       
    };
    return (
      <>
        <input ref={first} type="text" />
        <input ref={second} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  export default App; */
 
export default function App(){
  let [res,setRes] = useState()
  function callApi(){
    axios.get('https://node-fake-api.herokuapp.com/user/')
    .then((res)=>{setRes(res.data.data);})
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{callApi()},[])
return(<>{console.log(res)}</>

 )
}