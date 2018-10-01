import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8080'
const INITAL_VALUES = {
        expenses: [{}]
}


export function init1() {
        console.log("pass")
        return [
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList'),
                getList(),
                initialize('expenseForm', INITAL_VALUES)
        ]
}

export function getList() {
        const request = axios.get(`${BASE_URL}/expense/`)
        return {
                type: 'EXPENSES_FETCHED',
                payload: request
        }        
}

function submit (values, method) {
        console.log("salvando " + method)
        return dispatch => {
                const id = values._id ? values._id : ''
                console.log(values)
                axios[method](`${BASE_URL}/expense/${id}`, values)
                        .then(resp => {
                                toastr.success('Sucess', 'Done!')
                                dispatch(init1())
                        })
                        .catch( 
                                e => {
                                console.log(e.response.data.errors)  
                                e.response.data.errors.forEach(error => 
                                        toastr.error('Error', error))
                                
                        })
        }
} 

export function update(values) {
        return submit(values, 'put')
}

export function create(values) {
        return submit(values, 'post')
}

export function remove(values) {
        return submit(values, 'delete')
}

export function showUpdate(expense) {
        return [
                showTabs('tabUpdate'),
                selectTab('tabUpdate'),
                initialize('expenseForm', expense)
        ]
}

//to fix
export function showDelete(expense) {
        return [
                showTabs('tabDelete'),
                selectTab('tabDelete'),
                initialize('expenseForm', expense)
        ]
}