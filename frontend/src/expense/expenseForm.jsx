import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'


class ExpenseForm extends Component {

    render() {
        return (
            <form role='form'>
   				<div className='box-body'>
                   <h1>Teste</h1>
                    <Field name='description' component={labelAndInput} readOnly={readOnly}
    						label='Description' cols='12 4' placeholder='Description' />
                    <Field name='value' component={labelAndInput} readOnly={readOnly}
    						label='Value' cols='12 4' placeholder='Value' />
                    <Field name='category' component={labelAndInput} readOnly={readOnly}
    						label='Category' cols='12 4' placeholder='Category' />
                </div>
            </form>

        )
    }
}

ExpenseForm = reduxForm({form: 'expenseForm', destroyOnUnmount: false})(ExpenseForm)
const selector = formValueSelector('expenseForm')
const mapStateToProps = state => ({
	expenses: selector(state, 'expenses')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)