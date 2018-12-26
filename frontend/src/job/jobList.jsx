import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getListJobs, showUpdate, showDelete } from './jobActions'

class JobList extends Component {

	componentWillMount() {
		this.props.getListJobs()
    }
    
    rederRows() {
		const list = this.props.list || []
		return list.map(j => (
			<tr key={j.idJob}>
				<td>{j.date}</td>
				<td>{j.qtHour}</td>
				<td>{j.totalReceived}</td>
				<td>
					<button className='btn btn-warning' onClick={() => this.props.showUpdate(j)}>
						<i className='fa fa-pencil'></i>
					</button>
					<button className='btn btn-danger' onClick={() => this.props.showDelete(j)}>
						<i className='fa fa-trash-o'></i>
					</button>
				</td>
			</tr>
		))
	}

	render() {
		return (
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>Date</th>
							<th>Qt Hour</th>
							<th>Total Job</th>													
							<th className='tab-actions'> Actions </th>
						</tr>
					</thead>
					<tbody>
						{this.rederRows()}
					</tbody>
				</table>
			</div>
		)
	}
}


const mapStateToProps = state => ({ list: state.job.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getListJobs, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(JobList)
