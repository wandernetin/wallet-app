import React from 'react'

export default props => (
        <div className='menu-item'>
                <li>
                        <a href={props.path}>
                                <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
                        </a>

                </li>
        </div>
)