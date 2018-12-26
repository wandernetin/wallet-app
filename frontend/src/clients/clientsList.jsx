import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './clientActions'

class ClientList extends Component {

	componentWillMount() {
		this.props.getList()
    }
    
    rederRows() {
		const list = this.props.list || []
		return list.map(c => (
			<tr key={c.idClient}>
				<td>{c.nameClient}</td>
				<td>{c.typeWork}</td>
				<td>
					<button className='btn btn-warning' onClick={() => this.props.showUpdate(c)}>
						<i className='fa fa-pencil'></i>
					</button>
					<button className='btn btn-danger' onClick={() => this.props.showDelete(c)}>
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
							<th>Name</th>
							<th>Hour Value</th>
							<th>Hour Fee</th>
							<th>Hour Tax</th>
							<th>Type Work</th>
							
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


const mapStateToProps = state => ({ list: state.client.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientList)
