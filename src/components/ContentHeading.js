import React from 'react';
import _ from '../style.scss';

class ContentHeading extends React.Component {
    render() {
        return (
            <div className="content__heading">
                <div className="content__heading-h">Browse Available Books</div>
                <div className="content__toolbar">
                    <div className="content__collections">
                        <button className="content__collection content__collection_active">All Books</button>
                        <button className="content__collection">Most Recent</button>
                        <button className="content__collection">Most Popular</button>
                        <button className="content__collection">Free Books</button>
                    </div>
                    <form className="content__search">
                        <input type="text" className="content__search-input" placeholder="Enter a keyword" />
                        <button type="button" className="content__search-submit"></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContentHeading;