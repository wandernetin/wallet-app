const INITIAL_STATE = {
        summary: {credit: 0, debt: 0},
        last3ExpensesList: [],
        lastIncomes: [],
                        
}

export default function(state = INITIAL_STATE, action) {
        switch(action.type) {
                case 'SUMMARY_FETCHED':
                       return { ...state, summary: action.payload.data}
                case 'SUMMARY_PAYMENT_FETCHED':
                       return { ...state, summaryPayment: action.payload.data}
                case 'LAST_EXPENSES' :
                        return { ...state, last3ExpensesList: action.payload.data };
                case 'LAST_INCOMES' :
                        return { ...state, lastIncomes: action.payload.data };
                default:
                        return state;
        }
}