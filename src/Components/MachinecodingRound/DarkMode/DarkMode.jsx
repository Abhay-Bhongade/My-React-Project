import React, { useState } from 'react'
import "./DarkMode.css"

const DarkMode = () => {
    
// REQUIREMENTS!

// Add dark-mode switching functionality to the existing dark-mode button
// Utilise the existing dark-mode scss file by adding a dark-mode class to the root html element
// When in Dark mode:
// The button icon should be faSun
// The button icon colour should be (#FFA500). You can use the color prop on the Icon component.
//https://codesandbox.io/p/sandbox/confident-https-qjwlzy?file=%2Fsrc%2Findex.js%3A18%2C1

const [toggle,setToggle] = useState(false);
const themeColor = toggle ? "dark-mode" : "light-mode";

console.log(themeColor);
console.log(toggle);
  return (
    <div className={`app ${themeColor}`}>
     <div className='headingandbtn'><h3>Dark Mode Challenge</h3><button onClick={()=>setToggle(prev => !prev)}>Dark Mode</button></div> 
      <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
      <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.

</p>
    </div>
  )
}

export default DarkMode