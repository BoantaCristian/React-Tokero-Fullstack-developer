import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import _ from "lodash"
import Pagination from './Pagination'

const Operations = (props) => {
   
    useEffect(() => {
        props.fetchDeposits()
        console.log(props.Deposits.slice(0,1))
        props.Deposits.slice(0,1)
    },[])

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount</TableCell>
                            <TableCell>From Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.Deposits.map((record, index)=>{
                                return(
                                    <TableRow key={index}>
                                        <TableCell> {record.amount} </TableCell>
                                        <TableCell> {record.fromAddress} </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination length={props.Deposits.length} wait={1000} />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        Deposits: state.operations.deposits
    }
}

const mapActionToProps = {
    fetchDeposits: actions.fetchDeposits
}

export default connect(mapStateToProps, mapActionToProps) (Operations)
