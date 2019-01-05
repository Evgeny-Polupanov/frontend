import React from 'react';
import _ from '../style.scss';
import Nav from './Nav';
import RecentActions from './RecentActions';

class Aside extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <aside className="aside">
            <div className="add-book__wrapper">
                <button className="add-book__button" onClick={this.props.openModal}>Add a book</button>
            </div>
            <Nav />
            <RecentActions />
        </aside>
        )
    }
}

export default Aside;