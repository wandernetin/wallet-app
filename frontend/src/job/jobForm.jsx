import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {getListClients} from './jobActions'
import labelAndInput from '../common/form/labelAndInput'
import labelAndSelect from '../common/form/labelAndSelect'


class JobForm extends Component {

    componentWillMount() {
        this.props.getListClients()

    }

   createClientList() {
        const listClient = this.props.clientList || []
        let items = []
        for(let i = 0; i < listClient.length; i++) {
            items.push(	{ value: listClient[i], name: listClient[i]["nameClient"]})
        }
        return items;
   }


    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
   				<div className='box-body'>
                    <Field name='qtHour' component={labelAndInput} readOnly={readOnly}
    						label='Qt Hour' cols='12 4' placeholder='Qt Hour' /> 
                   
                    <Field name='date' component={labelAndInput} readOnly={readOnly}
    						label='Date' cols='12 4' placeholder='Date' type='date' />

                    <Field name='client' component= {labelAndSelect} readOnly={readOnly}
                            label='Client' cols='12 4' placeholder='Client'
                            options={this.createClientList()} />
                   
                   
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

JobForm = reduxForm({form: 'jobForm', destroyOnUnmount: false})(JobForm)
const selector = formValueSelector('jobForm')
const mapStateToProps = state => ({ clientList: state.job.clientList })

const mapDispatchToProps = dispatch => bindActionCreators({getListClients}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(JobForm)