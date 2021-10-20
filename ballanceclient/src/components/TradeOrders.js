import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Pagination from './Pagination'

const TradeOrders = (props) => {
    const [paginatedTradeOrders, setPaginatedTradeOrders] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)

    useEffect(() => {
        props.fetchTradeOrders()      
    },[])

    useEffect(() => {
        setTimeout(() => {
            setPaginatedTradeOrders(props.TradeOrders.slice(0,5))
            console.log(props.TradeOrders.slice(0,5))
        }, 500);
      }, [500]);

    useEffect(() => {
        setPaginatedTradeOrders(props.TradeOrders.slice(startIndex,startIndex + 5))
    },[startIndex])

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount</TableCell>
                            <TableCell>Trade Order Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.TradeOrders.map((record, index)=>{
                                return(
                                    <TableRow key={index}>
                                        <TableCell> {record.amount} </TableCell>
                                        <TableCell> {record.name} </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination length={props.TradeOrders.length} wait={100} currentPage={currentPage} setCurrentPage={setCurrentPage} setStartIndex={setStartIndex} />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        TradeOrders: state.operations.tradeOrders
    }
}

const mapActionToProps = {
    fetchTradeOrders: actions.fetchTradeOrders
}

export default connect(mapStateToProps, mapActionToProps) (TradeOrders)
