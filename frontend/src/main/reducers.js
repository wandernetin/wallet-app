import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastReducer} from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer'
import ExpenseReducer from '../expense/expenseReducer'
import IncomeReducer from '../income/incomeReducer'
import DashboardReducer from '../dashboard/dashboardReducer'




const rootReducer = combineReducers({
        dashboard: DashboardReducer,
        tab: TabReducer,
        form: formReducer,
        toastr: toastReducer,
        expense: ExpenseReducer,
        income: IncomeReducer
})

export default rootReducer