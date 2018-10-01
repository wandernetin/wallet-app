import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select {...props.input} className='form-control' placeholder={props.placeholder} 
                readOnly={props.readOnly}>
                {props.options.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                })}
                
            </select>
        </div>
    </Grid>
)