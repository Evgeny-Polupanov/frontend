import React from 'react';
import _ from '../style.scss';
import BookItem from './BookItem';

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksArr: []
        }
    }

    componentWillMount() {
        this.setState({
            booksArr: JSON.parse(localStorage.getItem('books'))
        });

    }

    render() {
        return (
            <div className="content__container">
                {this.state.booksArr.map(item => (
                    <div className="book-item">
                        <div className="book-item__picture"
                            style={{backgroundImage: item.posterURL}}
                        ></div>
                        <div className="book-item__title">{item.title}</div>
                        <div className="book-item__author">by {item.author}</div>
                        <div className="book-item__rating"></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default ContentContainer;