import React, { useMemo, useState } from 'react'
import Post from './Post';

const SignIn = () => {
    const [signIn,setSignIn] = useState(false);
    const posts = useMemo(()=>({title:"Hello User",content:"Welcome to My Website"}),[])

    

    const handleSignIn = ()=>{
        setSignIn(prev =>!prev);
    }
    const [count,setCount] = useState(0);
    const handleIncreament = ()=>{
        setCount((prev)=>prev + 1)
    }
  return (
    <>
        <div>Sign In  Compoent</div>
        <div>{count}</div>
        <Post signIn={signIn} posts={posts} />
        <button onClick={handleSignIn}>toggle SignIn</button>
        <button onClick={handleIncreament}>Increament</button>

    </>
  )
}

export default SignIn