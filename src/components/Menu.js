import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/create'>
                    Create product
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav
