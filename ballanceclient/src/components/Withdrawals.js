import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import Pagination from './Pagination'

const Withdrawals = (props) => {
    const [paginatedWithdrawals, setPaginatedWithdrawals] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [startIndex, setStartIndex] = useState()

    useEffect(() => {
        props.fetchWithdrawals()        
    },[])

    useEffect(() => {
        setTimeout(() => {
            setPaginatedWithdrawals(props.Withdrawals.slice(0,5))
            console.log(props.Withdrawals.slice(0,5))
        }, 500);
      }, [500]);
    
      useEffect(() => {
        setPaginatedWithdrawals(props.Withdrawals.slice(startIndex,startIndex + 5))
    },[startIndex])

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
            <Pagination length={props.Withdrawals.length} wait={100} currentPage={currentPage} setCurrentPage={setCurrentPage} setStartIndex={setStartIndex}/>
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
