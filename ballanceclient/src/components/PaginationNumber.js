import React, {useState, useEffect} from 'react'
import { Select, MenuItem } from '@material-ui/core'

const PaginationNumber = ({setPageSize}) => {

    const [pageSize, setSizeOfPage] = useState(5)

    useEffect(() => {
        console.log("PaginationNumber Component - page size:", pageSize)
      }, [pageSize]);


    const changePageSize = (e) => {
        setSizeOfPage(e.target.value)
        setPageSize(e.target.value)
    }

    return (
        <div className="sizeSelect">
            <Select value={pageSize} displayEmpty onChange={changePageSize}>
                <MenuItem value={5}> 5 </MenuItem>
                <MenuItem value={10}> 10 </MenuItem>
                <MenuItem value={15}> 15 </MenuItem>
            </Select>
        </div>
    )
}

export default PaginationNumber
