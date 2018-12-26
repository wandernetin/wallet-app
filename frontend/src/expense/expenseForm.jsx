import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import labelAndDate from '../common/form/labelAndDate'
import labelAndSelect from '../common/form/labelAndSelect'
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
                    <Field name='category' component= {labelAndSelect} readOnly={readOnly}
                            label='Category' cols='12 4' placeholder='Category'
                            options={[
                                { value: 0, name: "Rent"},
                                { value: 1, name: "Transport"},
                                { value: 2, name: "Eating Out"},
                                { value: 3, name: "Shopping"},
                                { value: 4, name: "Eletricity Bill"},
                                { value: 5, name: "Phone Bill"},
                                { value: 6, name: "Internet Bill"},
                                { value: 7, name: "Education"},
                                { value: 8, name: "Travel"},
                                { value: 9, name: "Jobs"},
                                { value: 10, name: "Car"}
                            ]} />
 
                   
                    <Field name='date' component={labelAndInput} readOnly={readOnly}
    						label='Date' cols='12 4' placeholder='Date' />

                    <Field name='dueDate' component={labelAndInput} readOnly={readOnly}
    						label='Due Date' cols='12 4' placeholder='Due Date' />

                    <Field name='periodicity' component= {labelAndSelect} readOnly={readOnly}
                            label='Periodicity' cols='12 4' placeholder='Periodicity'
                            options={[
                                { value: 0, name: "Weekly"},
                                { value: 1, name: "Fortnightly"},
                                { value: 2, name: "Monthly"},
                                { value: 3, name: "Once"}
                            ]} />
                   
                   
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