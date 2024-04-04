import React,{useState,useEffect} from 'react'
import "./PaginationAndSearch.css"
import axios from 'axios';

const Pagination = () => {
    const [searchText,setSearchText] = useState("");
    const [Fetcheddata,setFetchedData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [pagePerItem] = useState(8);
    const [loading,setLoading] = useState(true)

useEffect(()=>{
    try{
        const fetchData = async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
            console.log("data",data);
            setFetchedData(data);
           
        }
        fetchData();
    }catch(error){
        console.log("error while fetching data",error);
    }finally{
        setLoading(false);
    }

},[])

useEffect(()=>{
    setCurrentPage(1);
},[searchText])

const filterData = Fetcheddata.filter((item)=>
item?.title.toLowerCase().includes(searchText.toLowerCase())
)

const indexOfLastItem = currentPage * pagePerItem;
const indexOfFirstItem = indexOfLastItem - pagePerItem;
const currentItems = filterData?.slice(indexOfFirstItem,indexOfLastItem);

const handlePrePage = ()=>{
    setCurrentPage(prev=> prev - 1);
}

const handleNextPage = ()=>{
    setCurrentPage(prev=>prev + 1);
}

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="co-md-12 mb-5">
                    <div className='search-container'>
                        <input type="text" value={searchText} placeholder='Search...' onChange={(e)=>setSearchText(e.target.value)} />
                    </div>
                </div>
            </div>
            {
                loading ? <div>Loading</div> :  <div className="row">
                {
                    currentItems?.map((item)=>{
                        return(
                            <>
                             <div className="col-md-3 my-2" key={item?.id}>
                    <div className="card" style={{width:"16rem"}}>
                        <img src={item?.thumbnailUrl} className='card-img-top img card-img' alt="loading..." />
                        <div className="card-body">
                            <div className="heading-div"><h6>{item?.title?.length > 40 ? item?.title?.slice(0,40) + "..." : item?.title}</h6></div>
                            <div className="para-div">
                                {item?.url}
                            </div>
                        </div>
                    </div>
                </div>
                            </>
                        )
                    })
                }
               
            </div>
            }
           
            <div className="row my-2">
                <div className="col-md-12">
                    <div className='pagination-container'>
                    <button disabled={currentPage === 1} onClick={handlePrePage} className='mx-2'>Prev</button> <button disabled={indexOfLastItem >= Fetcheddata?.length} onClick={handleNextPage}>Next</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Pagination

