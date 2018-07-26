import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastReducer} from 'react-redux-toastr'
import TabReducer from '../common/tab/tabReducer'
import ExpenseReducer from '../expense/expenseReducer'



const rootReducer = combineReducers({
        tab: TabReducer,
        form: formReducer,
        toastr: toastReducer,
        expense: ExpenseReducer
})

export default rootReducer