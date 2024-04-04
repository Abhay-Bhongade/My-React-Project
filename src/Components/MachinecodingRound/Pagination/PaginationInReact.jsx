import React, { useState, useEffect } from 'react';

const PaginationInReact = () => {
  // State variables
  const [data, setData] = useState([]); // Data to be paginated
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [perPage] = useState(10); // Items per page
  const [searchValue,setSearchValue] = useState("")

  // Fetch data (simulated)
  useEffect(() => {
    // Simulated API call to fetch data
    const fetchData = async () => {
      // Simulated data
      const response = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`,
      }));
      setData(response);
    };
    fetchData();
  }, []);

  useEffect(()=>{
    setCurrentPage(1);
  },[searchValue])

const filteredData = data.filter((item)=>
     item.name.toLowerCase().includes(searchValue.toLowerCase())
)

console.log("filteredData",filteredData);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <div>
        <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
      </div>
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button
        onClick={handleNextPage}
        disabled={indexOfLastItem >= data.length}>
        Next
      </button>
    </div>
  );
};

export default PaginationInReact;
