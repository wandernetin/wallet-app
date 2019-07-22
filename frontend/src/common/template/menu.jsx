import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
        <ul className='sidebar-menu'>
                <h4>
                        <MenuItem path='#' label='Dashboard' icon='dashboard' />
                        <MenuTree label='Register' icon='edit'>
                                <MenuItem path='#expense' label='Expenses' icon='usd' />
                                <MenuItem path='#income' label='Income' icon='money' />
                        </MenuTree>
                </h4>
                
        </ul>
)