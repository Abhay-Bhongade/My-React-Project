import React,{useRef} from 'react'

const UseRefDomManipulation = () => {
    const myRef = useRef(null);

    const ChangeBgColor = ()=>{
        if(myRef.current){
            myRef.current.style.backgroundColor = "red"
        }
    }

  return (
    <div>
        <div style={{width:"300px",height:"100px",backgroundColor:"blue"}} ref={myRef}>UseRef DomManipulation</div>
        <button onClick={ChangeBgColor}>ChangeBgColor</button>
    </div>
  )
}

export default UseRefDomManipulation