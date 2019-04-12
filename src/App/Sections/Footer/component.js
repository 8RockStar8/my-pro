import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-center">
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
