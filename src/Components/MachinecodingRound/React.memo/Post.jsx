import React from 'react'

const Post = ({signIn,posts}) => {
    console.log("child component is Render");
  return (
    <div>
        <h3>{posts.title}</h3>
      {signIn && <button>User is Successfully Sign</button>}  
    </div>
  )
}

export default React.memo(Post)