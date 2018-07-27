import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {init} from './expenseActions'


class ExpenseForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
   				<div className='box-body'>
                    <Field name='description' component={labelAndInput} readOnly={readOnly}
    						label='Description' cols='12 4' placeholder='Description' />
                    <Field name='value' component={labelAndInput} readOnly={readOnly}
    						label='Value' cols='12 4' placeholder='Value' />
                    <Field name='category' component={labelAndInput} readOnly={readOnly}
    						label='Category' cols='12 4' placeholder='Category' />
                </div>
                <div className='box-footer'>
					<button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
					<button type='button' className='btn btn-default' onClick={this.props.init}> 
						Cancel
					</button> 
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