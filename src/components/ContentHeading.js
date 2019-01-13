import React from 'react';
import _ from '../style.scss';
import Search from './Search';

class ContentHeading extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="content__heading">
                <div className="content__heading-h">Browse Available Books</div>
                <div className="content__toolbar">
                    <div className="content__collections">
                        <button className={this.props.allBooksFilter ? "content__collection content__collection_active" : "content__collection"} onClick={this.props.chooseAllBooks}>All Books</button>
                        <button className={this.props.mostRecentFilter ? "content__collection content__collection_active" : "content__collection"} onClick={this.props.chooseMostRecentBooks}>Most Recent</button>
                        <button className={this.props.mostPopularFilter ? "content__collection content__collection_active" : "content__collection"} onClick={this.props.chooseMostPopularBooks}>Most Popular</button>
                        <button className={this.props.freeBooksFilter ? "content__collection content__collection_active" : "content__collection"} onClick={this.props.chooseFreeBooks}>Free Books</button>
                    </div>
                    <Search 
                        searchSubmit={this.props.searchSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default ContentHeading;