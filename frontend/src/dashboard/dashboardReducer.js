const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
        switch(action.type) {
                case 'SUMMARY_FETCHED':
                       return { ...state, summary: action.payload.data}
                case 'SUMMARY_PAYMENT_FETCHED':
                       return { ...state, summaryPayment: action.payload.data}
                default:
                        return state
        }
}