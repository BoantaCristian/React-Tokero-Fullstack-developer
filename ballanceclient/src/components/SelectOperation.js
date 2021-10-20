import React, {useState, useEffect} from 'react'
import { Select, MenuItem } from '@material-ui/core'

const SelectOperation = () => {
    const [operationSelected, setOperationSelected] = useState("deposits")

    const selectOperations = (e) => {
        setOperationSelected(e.target.value)
    }

    return (
        <div className="selectContainer">
            <Select value={operationSelected} displayEmpty className="select" onChange={selectOperations}>
                <MenuItem value={"deposits"}> Deposits </MenuItem>
                <MenuItem value={"withdrawals"}> Withdrawals </MenuItem>
                <MenuItem value={"tradeOrders"}> Trade Orders </MenuItem>
            </Select>
        </div>
    )
}

export default SelectOperation
