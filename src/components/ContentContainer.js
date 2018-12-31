import React from 'react';
import _ from '../style.scss';
import BookItem from './BookItem';

class ContentContainer extends React.Component {
    render() {
        return (
            <div className="content__container">
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </div>
        )
    }
}

export default ContentContainer;