import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './ReadMoreMain.css';

const ReadMoreMain = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isTruncated, setIsTruncated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setFetchedData(data);
        setIsTruncated(new Array(data.length).fill(true));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTruncate = useCallback((index) => {
    setIsTruncated((prev) => {
      const newData = [...prev];
      newData[index] = !newData[index];
      return newData;
    });
  }, []);

  const truncatedText = useCallback((text, index) => {
    return isTruncated[index] ? text?.slice(0, 100) : text;
  }, [isTruncated]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = fetchedData.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            currentItems.map((item) => (
              <div className="col-md-3 my-2" key={item.id}>
                <div className="card">
                  <img src="https://i.pinimg.com/564x/e0/b8/5c/e0b85ca7e1132d57523244f699a60dc5.jpg" className="card-img-top img card-img" alt="" />
                  <div className="card-body">
                    <p className="card-text">{truncatedText(item.body, item.id)}</p>
                    {item.body.length > 140 && (
                      <button className="btn btn-primary" onClick={() => toggleTruncate(item.id)}>
                        {isTruncated[item.id] ? 'Read More' : 'Read Less'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="pagination justify-content-end">
        <ul className="pagination">
          {Array(Math.ceil(fetchedData.length / itemsPerPage))
            .fill()
            .map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(index + 1)} className="page-link">
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadMoreMain;
