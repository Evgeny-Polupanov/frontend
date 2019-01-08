import React from 'react';
import _ from '../style.scss';
import BookItem from './BookItem';

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
                {allArr[this.props.tab].map((item, index) => (
                    <BookItem 
                        item={item}
                        readBook={this.props.readBook}
                        key={item.title}
                    />
                ))}
            </div>
        )
    }
}

export default ContentContainer;