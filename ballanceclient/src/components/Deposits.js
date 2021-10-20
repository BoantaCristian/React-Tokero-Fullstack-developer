import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import _ from "lodash"
import Pagination from './Pagination'

const Operations = (props) => {
    
    const [paginatedDeposits, setPaginatedDeposits] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [startIndex, setStartIndex] = useState()

    useEffect(() => {
        props.fetchDeposits()
    },[])
    
    useEffect(() => {
        setTimeout(() => {
            setPaginatedDeposits(props.Deposits.slice(0,5))
            console.log(props.Deposits.slice(0,5))
        }, 500);
      }, [500]);

    useEffect(() => {
        setPaginatedDeposits(props.Deposits.slice(startIndex,startIndex + 5))
    },[startIndex])

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
            <Pagination length={props.Deposits.length} wait={100} currentPage={currentPage} setCurrentPage={setCurrentPage} setStartIndex={setStartIndex}/>
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
