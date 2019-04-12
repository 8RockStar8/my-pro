import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-center">
                <ul className="header-menu">
                    <li className="header-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header-menu-item">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
