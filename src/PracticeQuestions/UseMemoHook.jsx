import React,{useMemo,useState} from 'react'

const UseMemoHook = () => {

const [valueA,setValueA] = useState(5);
const [valueB,setValueB] = useState(10);


    const result = useMemo(()=>{
        console.log("Recaluculated Again");
        return valueA * valueB
    },[valueA,valueB])

  return (
    <>
    <div>
        <input type="number" value={valueA} onChange={(e)=>setValueA(e.target.value)} />
        <input type="number" value={valueB} onChange={(e)=>setValueB(e.target.value)} />
    </div>
    <div>Result :- {result}</div>
    </>
  )
}

export default UseMemoHook;