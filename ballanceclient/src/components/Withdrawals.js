import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Pagination from './Pagination'

const Withdrawals = (props) => {
    useEffect(() => {
        props.fetchWithdrawals()        
    },[])

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount</TableCell>
                            <TableCell>To Address</TableCell>
                            <TableCell>2FA Confirmed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.Withdrawals.map((record, index)=>{
                                return(
                                    <TableRow key={index}>
                                        <TableCell> {record.amount} </TableCell>
                                        <TableCell> {record.toAddress} </TableCell>
                                        <TableCell> {record.wasApprovedByUser2FA ? 'true' : 'false'} </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination length={props.Withdrawals.length} wait={1000} />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        Withdrawals: state.operations.withdrawals
    }
}

const mapActionToProps = {
    fetchWithdrawals: actions.fetchWithdrawals
}

export default connect(mapStateToProps, mapActionToProps) (Withdrawals)
