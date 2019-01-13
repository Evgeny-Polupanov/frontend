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
            allBooks: [],
            receivedBooks: [],
            allBooksFilter: true,
            mostRecentFilter: false,
            mostPopularFilter: false,
            freeBooksFilter: false,
            searchQuery: ''
        };
        this.chooseTab = this.chooseTab.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.chooseAllBooks=this.chooseAllBooks.bind(this);
        this.chooseMostPopularBooks=this.chooseMostPopularBooks.bind(this);
        this.chooseMostRecentBooks=this.chooseMostRecentBooks.bind(this);
        this.chooseFreeBooks=this.chooseFreeBooks.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if ((state.receivedBooks.length === 0) || (state.receivedBooks !== props.booksArr)) {
            if (state.allBooksFilter) {
                const searchedBooks = props.searchBooks(
                    props.booksArr,
                    state.searchQuery
                );
                return {
                    receivedBooks: props.booksArr,
                    allBooks: searchedBooks   
                }
            }
            else if (state.mostRecentFilter) {
                const searchedBooks = props.searchBooks(
                    props.booksArr,
                    state.searchQuery
                );
                return {
                    receivedBooks: props.booksArr,
                    allBooks: searchedBooks.filter(item => item.mostRecent)   
                }
            }
            else if (state.mostPopularFilter) {
                const searchedBooks = props.searchBooks(
                    props.booksArr,
                    state.searchQuery
                );
                return {
                    receivedBooks: props.booksArr,
                    allBooks: searchedBooks.filter(item => item.mostPopular)   
                }
            }
            else if (state.freeBooksFilter) {
                const searchedBooks = props.searchBooks(
                    props.booksArr,
                    state.searchQuery
                );
                return {
                    receivedBooks: props.booksArr,
                    allBooks: searchedBooks.filter(item => item.freeBook)   
                }
            }
        } 
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

    chooseAllBooks() {
        const searchedBooks = this.props.searchBooks(
            this.state.receivedBooks,
            this.state.searchQuery
        );
        this.setState({
            allBooks: searchedBooks,
            allBooksFilter: true,
            mostRecentFilter: false,
            mostPopularFilter: false,
            freeBooksFilter: false,
        })
    }
    
    chooseMostRecentBooks() {
        const searchedBooks = this.props.searchBooks(
            this.state.receivedBooks,
            this.state.searchQuery
        );
        this.setState({
            allBooks: searchedBooks.filter(item => item.mostRecent),
            allBooksFilter: false,
            mostRecentFilter: true,
            mostPopularFilter: false,
            freeBooksFilter: false,
        })
    }
    
    chooseMostPopularBooks() {
        const searchedBooks = this.props.searchBooks(
            this.state.receivedBooks,
            this.state.searchQuery
        );
        this.setState({
            allBooks: searchedBooks.filter(item => item.mostPopular),
            allBooksFilter: false,
            mostRecentFilter: false,
            mostPopularFilter: true,
            freeBooksFilter: false,
        })
    }
    
    chooseFreeBooks() {
        const searchedBooks = this.props.searchBooks(
            this.state.receivedBooks,
            this.state.searchQuery
        );
        this.setState({
            allBooks: searchedBooks.filter(item => item.freeBook),
            allBooksFilter: false,
            mostRecentFilter: false,
            mostPopularFilter: false,
            freeBooksFilter: true,
        })
    }
    
    searchSubmit(value) {
        let result;
        if (value !== '') {
            result = this.props.searchBooks(
                this.state.receivedBooks,
                value
            );
        } else {
            result = this.state.receivedBooks;
        }
        this.setState({
            allBooks: result,
            searchQuery: value
        });
    }

    render() {
        return (
            <div className="content">
               <ContentHeading
                    tab={this.state.currentTab}
                    chooseTab={this.chooseTab}
                    searchSubmit={this.searchSubmit}
                    chooseAllBooks={this.chooseAllBooks}
                    chooseMostPopularBooks={this.chooseMostPopularBooks}
                    chooseMostRecentBooks={this.chooseMostRecentBooks}
                    chooseFreeBooks={this.chooseFreeBooks}
                    allBooksFilter={this.state.allBooksFilter}
                    mostRecentFilter={this.state.mostRecentFilter}
                    mostPopularFilter={this.state.mostPopularFilter}
                    freeBooksFilter={this.state.freeBooksFilter}
                />
                <ContentContainer 
                    tab={this.state.currentTab} 
                    booksArr={this.state.allBooks}
                    readBook={this.props.readBook}
                    searchSubmit={this.searchSubmit}
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