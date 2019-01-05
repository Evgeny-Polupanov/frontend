import React from 'react';
import _ from '../style.scss';

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let allBooks = this.props.booksArr;
        let mostRecent = this.props.booksArr.filter(item => item.mostRecent);
        let mostPopular = this.props.booksArr.filter(item => item.mostPopular);
        let freeBooks = this.props.booksArr.filter(item => item.freeBook);
        let allArr = [allBooks, mostRecent, mostPopular, freeBooks];
        return (
            <div className="content__container">
                {allArr[this.props.tab].map(item => (
                    <div className="book-item" key={item.title}>
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