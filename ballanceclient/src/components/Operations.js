import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";

const Operations = (props) => {

    useEffect(() => {
        props.fetchAllOperations()
    },[])

    return (
        <div>
            from operations
        </div>
    )
}

const mapStateToProps = state => {
    return{
        OperationList: state.operations.list,
    }
}

const mapActionToProps = {
    fetchAllOperations: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps) (Operations)
