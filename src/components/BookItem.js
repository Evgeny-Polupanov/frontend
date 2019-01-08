import React from 'react';
import _ from '../style.scss';

class BookItem extends React.Component {
    constructor(props) {
        super(props);
        this.openBook = this.openBook.bind(this);
    }

    openBook() {
        this.props.readBook(this.props.item);
    }

    render() {
        return (
            <div className="book-item" onClick={this.openBook}>
            <div className="book-item__picture"
                style={{backgroundImage: this.props.item.posterURL}}
            ></div>
            <div className="book-item__title">{this.props.item.title}</div>
            <div className="book-item__author">by {this.props.item.author}</div>
            <div className="book-item__rating"></div>
        </div>
        )
    }
}

export default BookItem;