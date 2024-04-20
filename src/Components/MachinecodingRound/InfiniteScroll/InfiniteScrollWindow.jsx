import { useState, useEffect } from "react";

const  InfiniteScrollWindow =()=> {
  const [data, setData] = useState(50);

  useEffect(() => {
    const onScoll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 30) {
        setData((data) => data + 50);
      }
    };

    window.addEventListener("scroll", onScoll);
    return () => {
      window.removeEventListener("scroll", onScoll);
    };
  }, []);

  let element = [];
  for (let i = 0; i < data; i++) {
    element.push(<div key={i}>{i + 1}</div>);
  }
  console.log("element", element);
  console.log("data", data);
  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <h2>{element}</h2>
    </div>
  );
}

export default InfiniteScrollWindow;