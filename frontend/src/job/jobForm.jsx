import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {getListClients} from './jobActions'
import labelAndInput from '../common/form/labelAndInput'
import labelAndDate from '../common/form/labelAndDate'

class JobForm extends Component {

    constructor(props) {
        super(props) 
        this.onChangeClient = this.onChangeClient.bind(this)
        this.state = {
            job: this.props.job,
            listClient: this.props.listClient || []
        }
    }

    componentWillMount() {
        this.props.getListClients()
    }

    createClientList() {
        const defaultOption = [<option value='' key='default'> Select... </option>]
        const listClient = this.props.clientList || []
        console.log(listClient)

        return defaultOption.concat(listClient.map(
            c => (
                <option value={c.idClient} key={c.idClient} > {c.idClient} - {c.nameClient} </option>
            )
        ))
        }

    onChangeClient(e) {
        this.setState({
            job: {
                ...this.state.job,
                client: {
                    id: e.target.value
                }
            }
        })
    }

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
   				<div className='box-body'>


                    <div className="form-group ">
                        <label htmlFor="client">Client:</label>
                        <select value={this.state.job.client} onChange={this.onChangeClient} className="form-control" name="client" disabled={this.props.readOnly}>
                            {this.createClientList()}
                        </select>
                    </div>

                    <Field name='totalReceived' component={labelAndInput} readOnly={readOnly}
    						label='Total Received' cols='12 4' placeholder='Total Received' />
                   
                    <Field name='qtHour' component={labelAndInput} readOnly={readOnly}
    						label='Qt Hour' cols='12 4' placeholder='Qt Hour' /> 
                   
                    <Field name='date' component={labelAndDate} readOnly={readOnly}
    						label='Date' cols='12 4' placeholder='Date' />
                   
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
const mapStateToProps = state => ({ clientList: state.job.clientList,
    job: state.job })

const mapDispatchToProps = dispatch => bindActionCreators({getListClients}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(JobForm)