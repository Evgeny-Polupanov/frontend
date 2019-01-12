import React from 'react';
import _ from '../style.scss';

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
                        <button className="content__collection content__collection_active" onClick={this.props.chooseTab}>All Books</button>
                        <button className="content__collection" onClick={this.props.chooseTab}>Most Recent</button>
                        <button className="content__collection" onClick={this.props.chooseTab}>Most Popular</button>
                        <button className="content__collection" onClick={this.props.chooseTab}>Free Books</button>
                    </div>
                    <form className="content__search" onSubmit={this.props.searchSubmit}>
                        <textarea className="content__search-input" placeholder="Enter a keyword" />
                        <button type="submit" className="content__search-submit"></button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContentHeading;