import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './incomeActions'

class IncomeList extends Component {

	componentWillMount() {
		this.props.getList()
    }
    
    rederRows() {
		const list = this.props.list || []
		return list.map(i => (
			<tr key={i.id}>
				<td>{i.date}</td>
				<td>{i.value}</td>
				<td>
					<button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
						<i className='fa fa-pencil'></i>
					</button>
					<button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
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
							<th>Value</th>							
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


const mapStateToProps = state => ({ list: state.income.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(IncomeList)
