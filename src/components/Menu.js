import React from 'react'
import { NavLink } from 'react-router-dom'
import { getPermissions } from '../utils/heplers'

function Nav() {
    const showCreateBtn = getPermissions().CREATE
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Products
                </NavLink>
            </li>
            {showCreateBtn
                ? <li>
                    <NavLink activeClassName='active' to='/create'>
                        Create product
                    </NavLink>
                </li>
                : null}
        </ul>
    )
}

export default Nav
