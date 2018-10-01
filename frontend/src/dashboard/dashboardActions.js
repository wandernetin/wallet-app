import axios from 'axios'

const EXPENSE_BASE_URL = 'http://localhost:8080/expense'

export function getExpenseSummary() {
        const request = axios.get(`${EXPENSE_BASE_URL}/summary`)
        return {
                type: 'SUMMARY_FETCHED',
                payload: request
        }
}