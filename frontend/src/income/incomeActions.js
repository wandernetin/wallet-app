import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8080'
const INITAL_VALUES = {
        expenses: [{}]
}


export function init1() {
        return [
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList'),
                getList(),
                initialize('incomeForm', INITAL_VALUES)
        ]
}

export function getList() {
        const request = axios.get(`${BASE_URL}/income/`)
        return {
                type: 'INCOMES_FETCHED',
                payload: request
        }        
}

function submit (values, method) {
        console.log(values)
        return dispatch => {
                const id = values.id ? values.id : ''
                axios[method](`${BASE_URL}/income/${id}`, values)
                        .then(resp => {
                                toastr.success('Sucess', 'Done!')
                                dispatch(init1())
                        })
                        .catch( 
                                e => {
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

export function showUpdate(income) {
        return [
                showTabs('tabUpdate'),
                selectTab('tabUpdate'),
                initialize('incomeForm', income)
        ]
}

//to fix
export function showDelete(income) {
        return [
                showTabs('tabDelete'),
                selectTab('tabDelete'),
                initialize('incomeForm', income)
        ]
}