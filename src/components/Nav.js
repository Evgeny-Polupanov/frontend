import React from 'react';
import _ from '../style.scss';

class Nav extends React.Component {
    render() {
        return (
            <nav className="aside__nav">
                <ul className="aside__nav-ul">
                    <li className="aside__nav-li">
                        <a href="#" className="aside__nav-link">Now Reading</a>
                    </li>
                    <li className="aside__nav-li aside__nav-li_active">
                        <a href="#" className="aside__nav-link">Browse</a>
                    </li>
                    <li className="aside__nav-li">
                        <a href="#" className="aside__nav-link">Buy Books</a>
                    </li>
                    <li className="aside__nav-li">
                        <a href="#" className="aside__nav-link">Favourite Books</a>
                    </li>
                    <li className="aside__nav-li">
                        <a href="#" className="aside__nav-link">Wishlist</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;