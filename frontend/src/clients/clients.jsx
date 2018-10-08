import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab, showTabs } from '../common/tab/tabActions'

import Form from './clientsForm'
import List from './clientsList'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import { init, create, update, remove } from './clientActions'


class Client extends Component {


  render() {
    return (
      <div>
        <Tabs>
          <TabsHeader>
            <TabHeader label='List' icon='bars' target='tabList' />
            <TabHeader label='Create' icon='plus' target='tabCreate' />
            <TabHeader label='Update' icon='pencil' target='tabUpdate' />
            <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
          </TabsHeader>

          <TabsContent>
            <TabContent id='tabList'>
              <List />
            </TabContent>
            <TabContent id='tabCreate'>
              <Form onSubmit={this.props.create} submitLabel='Create'
                submitClass='primary' />
            </TabContent>
            <TabContent id='tabUpdate'>
              <Form onSubmit={this.props.update} submitLabel='Update'
                submitClass='info' />
            </TabContent>
            <TabContent id='tabDelete'>
              <Form onSubmit={this.props.remove} readOnly={true} submitLabel='Delete'
                submitClass='danger' />
            </TabContent>
          </TabsContent>

        </Tabs>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({ init, selectTab, showTabs, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(Client)
