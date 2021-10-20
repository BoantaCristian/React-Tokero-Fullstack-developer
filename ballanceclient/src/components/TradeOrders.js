import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const TradeOrders = (props) => {
    useEffect(() => {
        switch (1) {
            case 1:
                props.fetchTradeOrders()
                break;
        
            default:
                break;
        }
        
    },[])

    return (
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
    )
}

const mapStateToProps = state => {
    return{
        Deposits: state.operations.deposits,
        Withdrawals: state.operations.withdrawals,
        TradeOrders: state.operations.tradeOrders,
    }
}

const mapActionToProps = {
    fetchDeposits: actions.fetchDeposits,
    fetchWithdrawals: actions.fetchWithdrawals,
    fetchTradeOrders: actions.fetchTradeOrders
}

export default connect(mapStateToProps, mapActionToProps) (TradeOrders)
