import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ClientsForm from './clientsForm'
import ClientsList from './clientsList'

const URL = 'http://localhost:8080/client/'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { nameClient: '', hourValue: '', hourTax: '', hourFee: '', typeWork: '',
                    list: [] }
    this.handleAdd = this.handleAdd.bind(this)
    //this.handleRemove = this.handleRemove.bind(this)
    //this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    //this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    //this.handleSearch = this.handleSearch.bind(this)
    //this.handleClear = this.handleClear.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    console.log("Tesr")
    //const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => this.setState({...this.state, list: resp.data}))
    console.log(this.state.list)
  }

 /* handleSearch() {
    this.refresh(this.state.description)
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }*/


  handleAdd() {
    const payload = {
      nameClient: this.state.nameClient,
      hourValue: this.state.hourValue,
      hourTax: this.state.hourTax,
      hourFee:  this.state.hourFee,
      typeWork:  this.state.typeWork
    }
    axios.post(URL, payload)
      .then(resp => this.refresh())
  }

  /*handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true })
      .then(resp => this.refresh(this.state.description))   
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false })
      .then(resp => this.refresh(this.state.description))   
  }*/

  handleClear() {
    this.refresh()
  }
  
  render() {
    return (
      <div>
        <PageHeader name='Clients' small='Register'/>
        <ClientsForm 
         
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}/>
        <ClientsList 
          list={this.state.list}
          />
      </div>
    )
  }
}