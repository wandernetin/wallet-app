import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import labelAndSelect from '../common/form/labelAndSelect'
import {init} from './clientActions'


class ClientForm extends Component {
  render() {
		const {handleSubmit, readOnly} = this.props
		return (
			<form role='form' onSubmit={handleSubmit}>
			 <div className='box-body'>
					<Field name='nameClient' component={labelAndInput} readOnly={readOnly}
						label='Name' cols='12 4' placeholder='Name' />
					<Field name='typeWork' component= {labelAndSelect} readOnly={readOnly}
												label='Type Work' cols='12 4' placeholder='Type Work'
												options={[
														{ value: 0, name: "ABN"},
														{ value: 1, name: "TFN"}
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

ClientForm = reduxForm({form: 'clientForm', destroyOnUnmount: false})(ClientForm)
const selector = formValueSelector('clientForm')
const mapStateToProps = state => ({
clients: selector(state, 'clients')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)