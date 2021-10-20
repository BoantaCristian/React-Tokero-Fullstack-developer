import React, {useState, useEffect} from 'react'
import _ from "lodash"
import PaginationNumber from './PaginationNumber';

const Pagination = ({length, wait, currentPage, setCurrentPage, setStartIndex}) => {
    
    const [isShown, setIsShown] = useState(false);
    
    const [pageSize,setPageSize] = useState(5)
    const [pageCount,setPageCount] = useState(Math.ceil(length/pageSize))
    const [pages,setPages] = useState(_.range(1, pageCount + 1))
    
    useEffect(() => {
        setTimeout(() => {
          setIsShown(true);
        }, wait);
      }, [wait]);
      
    useEffect(() => {
        setPageCount(Math.floor(length/pageSize))
        setPages(_.range(1, pageCount + 1)) //sau cu for(1-pageCount) pageSide.push
    }, [pageSize]);
    
    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
        setStartIndex((pageNumber - 1) * pageSize)
        console.log("Pagination Component - Start Index", (pageNumber -1) * pageSize)
    }

    return  (
        <div className="paginationContainer">
            <PaginationNumber pageSize={pageSize} setPageSize={setPageSize} />
            <nav>
                <ul className="pagination">
                    {
                        pages.map((page, index) => {
                            return (

                                <li key={index} className={page === currentPage ? "page-item active" : "page-item"} > 
                                   <p className="page-link" onClick={() => changePage(page)}> {page} </p>
                                </li>
                                )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
