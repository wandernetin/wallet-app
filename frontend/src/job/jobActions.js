import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:8080'
const INITAL_VALUES = {
        jobs: [{}]
}


export function init() {
        return [
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList'),
                getListJobs(),
                initialize('jobForm', INITAL_VALUES)
        ]
}

export function getListClients() {
    const request = axios.get(`${BASE_URL}/client/`)
    return {
            type: 'CLIENTS_JOBS_FETCHED',
            payload: request
    }        
}

export function getListJobs() {
        const request = axios.get(`${BASE_URL}/job/`)
        return {
                type: 'JOBS_FETCHED',
                payload: request
        }        
}

function submit (values, method) {
        console.log(values)
        return dispatch => {
                const id = values.idJob ? values.idJob : ''
                axios[method](`${BASE_URL}/job/${id}`, values)
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

export function showUpdate(job) {
        return [
                showTabs('tabUpdate'),
                selectTab('tabUpdate'),
                initialize('jobForm', job)
        ]
}

//to fix
export function showDelete(job) {
        return [
                showTabs('tabDelete'),
                selectTab('tabDelete'),
                initialize('jobForm', job)
        ]
}