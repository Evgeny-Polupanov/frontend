import React from 'react';
import _ from '../style.scss';
import BookItem from './BookItem';

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return (
            <div className="content__container">
                {this.props.booksArr.map((item, index) => (
                    <BookItem 
                        item={item}
                        readBook={this.props.readBook}
                        key={index}
                    />
                ))}
            </div>
        )
    }
}

export default ContentContainer;