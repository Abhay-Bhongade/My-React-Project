import React,{memo} from 'react'

const TodoApp = ({todo}) => {
    console.log("Child Render")
  return (
    <>
        <h2>My Todos</h2>
        {
            todo?.map((item,index)=>{
                return(
                    <>
                    <p key={index}>{item}</p>
                    </>
                )
            })
        }
    </>
  )
}

export default memo(TodoApp);
//react memo check whether its props change that time it rerender otherwise does not rerender the component
//with memo we can save unneccessary rerender happing to your app