import React, {useState, useEffect} from 'react'
import _ from "lodash"
import PaginationNumber from './PaginationNumber';

const Pagination = ({length, wait}) => {
    
    const [isShown, setIsShown] = useState(false);
    
    const [pageSize,setPageSize] = useState(5)
    const [pageCount,setPageCount] = useState(Math.ceil(length/pageSize))
    const [pages,setPages] = useState(_.range(1, pageCount + 1))
    //console.log("asdasd",Math.ceil(length/pageSize))
    
    useEffect(() => {
        console.log(wait);
        setTimeout(() => {
          setIsShown(true);
        }, wait);
      }, [wait]);
      
    useEffect(() => {
        console.log(wait)
    }, []);
    
    return  (
        <div className="paginationContainer">
            <PaginationNumber setPageSize={setPageSize} />
            <nav>
                <ul className="pagination">
                    {
                        pages.map((page) => {
                            return (

                                <li className="page-link" > {page} </li>
                                )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
