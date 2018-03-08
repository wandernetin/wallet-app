import React from 'react'
import Grid from '../template/grid'


export default props => (
  <div role='form' className='clientForm'>
    <Grid cols='12 9 10'>
      <input id='nameClient' className='form-control'
        placeholder='Client name'
        value={props.nameClient}></input> 
      <input id='hourValue' className='form-control'
        placeholder='Hour Value'
        value={props.hourValue}></input>
      <input id='hourTax' className='form-control'
        placeholder='Hour Tax'
        value={props.hourTax}></input>
      <input id='hourFee' className='form-control'
        placeholder='Hour Fee'
        value={props.hourFee}></input>
      <input id='typeWork' className='form-control'
        placeholder='Type of work'
        value={props.typeWork}></input>
    </Grid>
   
  </div>
)