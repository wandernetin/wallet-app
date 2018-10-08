import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8080'
const INITAL_VALUES = {
        expenses: [{}]
}


export function init() {
        return [
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList'),
                getList(),
                initialize('clientForm', INITAL_VALUES)
        ]
}

export function getList() {
        console.log('aqui')
        const request = axios.get(`${BASE_URL}/client/`)
        return {
                type: 'CLIENTS_FETCHED',
                payload: request
        }        
}

function submit (values, method) {
        return dispatch => {
                const id = values._id ? values._id : ''
                axios[method](`${BASE_URL}/client/${id}`, values)
                        .then(resp => {
                                toastr.success('Sucess', 'Done!')
                                dispatch(init())
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

export function showUpdate(client) {
        return [
                showTabs('tabUpdate'),
                selectTab('tabUpdate'),
                initialize('clientForm', client)
        ]
}

//to fix
export function showDelete(client) {
        return [
                showTabs('tabDelete'),
                selectTab('tabDelete'),
                initialize('clientForm', client)
        ]
}