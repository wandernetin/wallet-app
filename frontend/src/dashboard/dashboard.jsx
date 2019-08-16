import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './dashboard.css'

import { getExpenseSummary, getPaymentSummary, getLastExpenses, getLastIncomes } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

        componentWillMount() {
                this.props.getExpenseSummary();
                this.props.getPaymentSummary();
                this.props.getLastExpenses();
                this.props.getLastIncomes();
        }

        renderLastExpenses() {
                const list = this.props.last3ExpensesList || []
                return list.map(i => (
                        <tr key={i.id}>
                                <td>{i.date}</td>
                                <td>{i.description}</td>
                                <td>{i.value}</td>
                        </tr>
                ))
        }

        renderLastIncome() {
                const list = this.props.lastIncomes || []
                return list.map(i => (
                        <tr key={i.id}>
                                <td>{i.date}</td>
                                <td>{i.value}</td>
                        </tr>
                ))
        }

        render() {
                const debt = this.props.summary
                const credit = this.props.summaryPayment
                return (
                        <div>
                                <ContentHeader title='Dashboard' small='Version 1.0' />
                                <Content>
                                        <Row>
                                                <ValueBox cols='12 4' color='green' icon='bank'
                                                        value={`AUD$ ${credit}`} text='Credit Total' />
                                                <ValueBox cols='12 4' color='red' icon='credit-card'
                                                        value={`AUD$ ${debt}`} text='Debt Total' />
                                                <ValueBox cols='12 4' color='blue' icon='money'
                                                        value={`AUD$ ${credit - debt}`} text='Consolided Total' />
                                        </Row>
                                        <Row>
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 listDashboard">
                                                        <h3>Last 3 expenses</h3>
                                                        <table className='table'>
                                                                <thead>
                                                                        <tr>
                                                                                <th>Date</th>
                                                                                <th>Description</th>
                                                                                <th>Value</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {this.renderLastExpenses()}
                                                                </tbody>
                                                        </table>
                                                </div>
                                       
                                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 listDashboard">
                                                <h3>Last 3 incomes</h3>
                                                        <table className='table'>
                                                                <thead>
                                                                        <tr>
                                                                                <th>Date</th>
                                                                                <th>Value</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {this.renderLastIncome()}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </Row>
                                </Content>
                        </div>
                )
        }
}

const mapStateToProps = state => ({
        summary: state.dashboard.summary,
        summaryPayment: state.dashboard.summaryPayment,
        last3ExpensesList: state.dashboard.last3ExpensesList,
        lastIncomes: state.dashboard.lastIncomes
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
        getExpenseSummary, 
        getPaymentSummary, 
        getLastExpenses,
        getLastIncomes, 
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)