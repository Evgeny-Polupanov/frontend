import React from 'react';
import _ from '../style.scss';

class BookItem extends React.Component {
    render() {
        return (
            <div className="book-item">
                <div className="book-item__picture"></div>
                <div className="book-item__title">Jewels of Nizam</div>
                <div className="book-item__author">by Geeta Devi</div>
                <div className="book-item__rating"></div>
            </div>
        )
    }
}

export default BookItem;