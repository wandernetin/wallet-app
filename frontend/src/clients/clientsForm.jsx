import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import Input from '../template/input'

class ClientForm extends Component {
  render() {
    return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Field name='name' component={labelAndInput} readOnly={readOnly}
						label='Name' cols='12 4' placeholder='Name' />
					<Field name='month' component={labelAndInput} readOnly={readOnly}
						label='Month' cols='12 4' placeholder='Month'/>
					<Field name='year' component={labelAndInput} readOnly={readOnly}
						label='Year' cols='12 4' placeholder='Year'/>
					<Summary credit={sumOfCredits} debt={sumOfDebts} />
					<ItemList cols='12 6' list={credits} readOnly={readOnly} 
						field='credits' legend='Credits' />
					<ItemList cols='12 6' list={debts} readOnly={readOnly} 
						field='debts' legend='Debts' />
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