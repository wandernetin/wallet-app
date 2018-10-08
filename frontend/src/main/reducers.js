import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastReducer} from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer'
import ExpenseReducer from '../expense/expenseReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import ClientReducer from '../clients/clientReducer'




const rootReducer = combineReducers({
        dashboard: DashboardReducer,
        tab: TabReducer,
        form: formReducer,
        toastr: toastReducer,
        expense: ExpenseReducer,
        client: ClientReducer
})

export default rootReducer