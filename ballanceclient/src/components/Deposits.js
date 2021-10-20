import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Divider } from '@material-ui/core'
import _ from "lodash"
const Operations = (props) => {
    
    const [d,setD] = useState([])

    const pageSize = 5
    const pageCount = props.Deposits? Math.ceil(props.Deposits.length/pageSize) : 0
    
    useEffect(() => {
        props.fetchDeposits()
        
    },[])
    const pages = _.range(1, pageCount + 1)
    console.log("asdasd",props.Deposits? Math.ceil(props.Deposits.length/pageSize) : 0)
    return (
        <div>
            

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
        <nav>
            <ul className="pagination">
                {
                    pages.map((page) => {
                        <li className="page-link"> {page} </li>
                    })
                }
            </ul>
        </nav>
                    </div>
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

export default connect(mapStateToProps, mapActionToProps) (Operations)