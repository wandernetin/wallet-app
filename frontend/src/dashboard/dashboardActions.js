import axios from 'axios'

const EXPENSE_BASE_URL = 'http://localhost:8080/expense'
const PAYMENT_BASE_URL = 'http://localhost:8080/income'

export function getExpenseSummary() {
        const request = axios.get(`${EXPENSE_BASE_URL}/summaryMonth`)
        return {
                type: 'SUMMARY_FETCHED',
                payload: request
        }
}

export function getPaymentSummary() {
        const request = axios.get(`${PAYMENT_BASE_URL}/summaryMonth`)
        return {
                type: 'SUMMARY_PAYMENT_FETCHED',
                payload: request
        }
}

export function getLastExpenses() {
        const request = axios.get(`${EXPENSE_BASE_URL}/last3expenses`);
        return {
                type: 'LAST_EXPENSES',
                payload: request
        }
}