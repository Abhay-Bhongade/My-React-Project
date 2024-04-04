import React, { useState, useEffect } from 'react';
import './PaginationAndSearch.css';
import axios from 'axios';

const PaginationAndSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [fetchedData, setFetchedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagePerItem] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setFetchedData(data);
            };
            fetchData();
        } catch (error) {
            console.log('Error while fetching data', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchText]);

    const filterData = fetchedData.filter((item) =>
        item?.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const totalItems = filterData.length;
    const totalPages = Math.ceil(totalItems / pagePerItem);

    const handlePrePage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="co-md-12 mb-5">
                        <div className="search-container">
                            <input
                                type="text"
                                value={searchText}
                                placeholder="Search..."
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <div className="row">
                        {filterData.slice(
                            (currentPage - 1) * pagePerItem,
                            currentPage * pagePerItem
                        ).map((item) => (
                            <div className="col-md-3 my-2" key={item?.id}>
                                <div className="card" style={{ width: '16rem' }}>
                                    <img
                                        src={item?.thumbnailUrl}
                                        className="card-img-top img card-img"
                                        alt="loading..."
                                    />
                                    <div className="card-body">
                                        <div className="heading-div">
                                            <h6>
                                                {item?.title?.length > 40
                                                    ? item?.title?.slice(0, 40) + '...'
                                                    : item?.title}
                                            </h6>
                                        </div>
                                        <div className="para-div">{item?.url}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="row my-2">
                    <div className="col-md-12">
                        <div className="pagination-container">
                            <button disabled={currentPage === 1} onClick={handlePrePage} className="mx-2">
                                Prev
                            </button>
                            {currentPage > 2 && <button onClick={() => handlePageChange(1)}>1</button>}
                            {currentPage > 3 && <span>...</span>}
                            {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>{currentPage - 1}</button>}
                            <button className="active">{currentPage}</button>
                            {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>{currentPage + 1}</button>}
                            {currentPage < totalPages - 1 && <span>...</span>}
                            {currentPage < totalPages - 1 && <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>}
                            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="mx-2">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginationAndSearch;
