import React, { useState, useEffect } from 'react';

const PaginationExample = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            const newData = Array.from({ length: 100 }, (_, index) => ({
                id: index + 1,
                item: `Item No ${index + 1}`
            }));
            setData(newData);
        };

        fetchData();
    }, []); // Run this effect only once after the component mounts

    useEffect(() => {
        setCurrentPage(1); // Reset currentPage when searchValue changes
    }, [searchValue]); // Run this effect when searchValue changes

    const filteredData = data.filter((item) =>
        item.item.toLowerCase().includes(searchValue.toLowerCase())
    );

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentPageItems = filteredData.slice(firstItemIndex, lastItemIndex);

    const handlePrevPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            <h4>PaginationExample</h4>
            <div>
                <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div>
                {
                    currentPageItems.map((item) => (
                        <div key={item.id}>
                            <p>{item.item}</p>
                        </div>
                    ))
                }
            </div>
            <div style={{ position: "absolute", right: 10, bottom: 10 }}>
                <button disabled={currentPage === 1} onClick={handlePrevPage} className='mx-2'>Prev</button>
                <button disabled={lastItemIndex >= filteredData.length} onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
}

export default PaginationExample;
