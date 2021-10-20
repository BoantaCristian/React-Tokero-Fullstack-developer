import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const Withdrawals = (props) => {


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.Withdrawals.map((record, index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell> {record.amount} </TableCell>
                                    <TableCell> {record.toAddress} </TableCell>
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
        Deposits: state.operations.list,
        Withdrawals: state.operations.list,
        TradeOrders: state.operations.list
    }
}

const mapActionToProps = {
    fetchDeposits: actions.fetchDeposits,
    fetchWithdrawals: actions.fetchWithdrawals,
    fetchTradeOrders: actions.fetchTradeOrders
}

export default connect(mapStateToProps, mapActionToProps) (Withdrawals)
