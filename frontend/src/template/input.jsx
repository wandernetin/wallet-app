import React from 'react'

export default props => (
        <div className="form-group">
                <label for="usr">{props.label}</label>
                <input id={props.id} className='form-control'
                        placeholder={props.label}
                        value={props.value}></input>
        </div>
)