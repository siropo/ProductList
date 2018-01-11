var React = require('react');
var NavLink = require('react-router-dom').NavLink;

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
            <li>
                <NavLink activeClassName='active' to='/edit/1'>
                   edit
                </NavLink>
            </li>
        </ul>
    )
}

module.exports = Nav;
