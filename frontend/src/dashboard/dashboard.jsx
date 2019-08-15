import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getExpenseSummary, getPaymentSummary, getLastExpenses } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

        componentWillMount() {
                this.props.getExpenseSummary();
                this.props.getPaymentSummary();
                this.props.getLastExpenses();
        }

        rederRows() {
                const list = this.props.last3ExpensesList || []
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
                                                Last 3 expenses.
                                        <div>
                                                        <table className='table'>
                                                                <thead>
                                                                        <tr>
                                                                                <th>Date</th>
                                                                                <th>Value</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        {this.rederRows()}
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
        last3ExpensesList: state.dashboard.last3ExpensesList
})
const mapDispatchToProps = dispatch => bindActionCreators({ getExpenseSummary, getPaymentSummary, getLastExpenses }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)