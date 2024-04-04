import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "./AutoSuggestion.css";

const AutoSuggestion = () => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchOn, setSearchOn] = useState(false); // Add state to control suggestion list visibility

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(
                    `https://jsonplaceholder.typicode.com/users`
                );
                setFilteredData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearchOn(false); // Show the suggestion list when typing in the input
    };

    const handleSelectedValue = (name) => {
        setSearchValue(name);
        setSearchOn(true); // Hide the suggestion list when a suggestion is selected
    };

    const debouncedSearchValue = useMemo(() => {
        return searchValue.trim();
    }, [searchValue]);

    const filteredSuggestions = useMemo(() => {
        if (!debouncedSearchValue) {
            return [];
        }

        return filteredData.filter((item) =>
            item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
        );
    }, [debouncedSearchValue, filteredData]);

    console.log("searchOn",searchOn);

    return (
        <div className="main-container">
            <div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleChange}
                    />
                </div>
                <div className={`suggestion-container ${searchOn || filteredSuggestions.length === 0 ? "d-none" : "d-block"}`}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        filteredSuggestions.map((item) => (
                            <p className={` ${searchOn || filteredSuggestions.length === 0 ? "d-hidden" : "d-block"}`}
                                key={item.id}
                                onClick={() => handleSelectedValue(item.name)}
                            >
                                {item.name}
                            </p>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AutoSuggestion;
