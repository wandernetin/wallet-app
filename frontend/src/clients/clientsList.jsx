import React from 'react'


export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(client => (
      <tr key={client._id}>
        <td>{client.nameClient}</td>
        <td>{client.hourValue}</td>
        <td>{client.hourTax}</td>
        <td>{client.hourFee}</td>
        <td>{client.typeWork}</td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Hour Value</th>
          <th>Hour Tax</th>
          <th>Hour Fee</th>
          <th>Type of Work</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}