import React from 'react'
import { useTheme } from '../theme-context';

const Blog = () => {
    const {theme,ToggleDarkMode} = useTheme();
  return (
    <div className={`${theme}`}>
    <h3>This is Blog Page Component</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas a eveniet cum quae illum? Provident alias magni iure. Quaerat, assumenda!</p>
</div>
  )
}

export default Blog