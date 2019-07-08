import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {init} from './incomeActions'


class IncomeForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
   				<div className='box-body'>
                    <Field name='date' component={labelAndInput} readOnly={readOnly}
    						label='Date' cols='12 4' placeholder='Date' />
                    <Field name='value' component={labelAndInput} readOnly={readOnly}
    						label='Value' cols='12 4' placeholder='Value' />
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

IncomeForm = reduxForm({form: 'incomeForm', destroyOnUnmount: false})(IncomeForm)
const selector = formValueSelector('incomeForm')
const mapStateToProps = state => ({
	incomes: selector(state, 'incomes')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(IncomeForm)