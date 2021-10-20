import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Pagination from './Pagination'

const TradeOrders = (props) => {
    useEffect(() => {
        props.fetchTradeOrders()
        console.log(props.TradeOrders.slice(0,5))
        props.TradeOrders.slice(0,1)        
    },[])

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
            <Pagination length={props.TradeOrders.length} wait={1000} />
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
