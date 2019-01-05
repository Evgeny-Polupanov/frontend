import React from 'react';
import _ from '../style.scss';
import ContentHeading from './ContentHeading';
import ContentContainer from './ContentContainer';
import { finished } from 'stream';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            booksArr: JSON.parse(localStorage.getItem('books'))
        };
        this.chooseTab = this.chooseTab.bind(this);
    }
       
    chooseTab(e) {
        e.target.parentElement.childNodes.forEach(item => {
            item.className = 'content__collection';
        });
        e.target.className = 'content__collection content__collection_active';
        let buttonsArr = [].slice.call(e.target.parentElement.childNodes);
        this.setState({
            currentTab: buttonsArr.indexOf(e.target)
        })
    }

    render() {
        return (
            <div className="content">
               <ContentHeading
                    tab={this.state.currentTab}
                    chooseTab={this.chooseTab}
                />
                <ContentContainer 
                    tab={this.state.currentTab} 
                    booksArr={this.state.booksArr}
                />
            </div>
        )
    }
}

export default Content;