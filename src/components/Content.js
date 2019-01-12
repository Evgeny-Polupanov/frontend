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
            allBooks: this.props.booksArr,
            mostRecent: this.props.booksArr.filter(item => item.mostRecent),
            mostPopular: this.props.booksArr.filter(item => item.mostPopular),
            freeBooks: this.props.booksArr.filter(item => item.freeBook)
        };
        this.chooseTab = this.chooseTab.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }
       
    chooseTab(e) {
        e.target.parentElement.childNodes.forEach(item => {
            item.className = 'content__collection';
        });
        e.target.className = 'content__collection content__collection_active';
        const buttonsArr = [].slice.call(e.target.parentElement.childNodes);
        this.setState({
            currentTab: buttonsArr.indexOf(e.target)
        })
    }
    
    searchSubmit(e) {
        e.preventDefault();
        let result;
        if (document.querySelector('.content__search-input').value !== '') {
            result = this.props.searchBooks(
                this.props.booksArr,
                document.querySelector('.content__search-input').value
            );
        } else result = this.props.booksArr;
        this.setState({
            allBooks: result,
            mostRecent: result.filter(item => item.mostRecent),
            mostPopular: result.filter(item => item.mostPopular),
            freeBooks: result.filter(item => item.freeBook)
        });
    }

    render() {
        return (
            <div className="content">
               <ContentHeading
                    tab={this.state.currentTab}
                    chooseTab={this.chooseTab}
                    //searchBooks={this.props.searchBooks}
                    searchSubmit={this.searchSubmit}
                    allBooks={this.state.allBooks}
                />
                <ContentContainer 
                    tab={this.state.currentTab} 
                    booksArr={this.props.booksArr}
                    readBook={this.props.readBook}
                    searchSubmit={this.props.searchSubmit}
                    allBooks={this.state.allBooks}
                    mostRecent={this.state.mostRecent}
                    mostPopular={this.state.mostPopular}
                    freeBooks={this.state.freeBooks}
                />
            </div>
        )
    }
}

export default Content;