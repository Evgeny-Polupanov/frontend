import React from 'react';
import ReactDOM from 'react-dom';
import _ from './style.scss';
import Aside from './components/Aside';
import Content from './components/Content';
import storedBooks from './Books.js';
import Modal from './components/Modal';
import { TSExpressionWithTypeArguments } from 'babel-types';

localStorage.setItem('books', JSON.stringify(storedBooks));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksArr: [],
            newBook: {
                title: '',
                author: '',
                publisher: '',
                paperback: '',
                isbn: '',
                summary: '',
                genre: '',
                posterURL: '',
                mostRecent: false,
                mostPopular: false,
                freeBook: false
            },
            errors: {},
            readingMode: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addBook = this.addBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.readBook = this.readBook.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
    }

    openModal() {
        document.querySelector('.modal__cover').className = 'modal__cover';
        document.querySelector('.modal__toolbar').style.display = 'flex';
    }

    closeModal() {
        document.querySelector('.modal__cover').className = 'modal__cover modal__cover_closed';
        document.querySelector('.modal__h').innerHTML = 'Add New Book';
        document.querySelectorAll('.modal__notification').forEach(item => {
            item.innerHTML = '';
        });
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal__success').style.display = 'none';
        this.setState({
            booksArr: JSON.parse(localStorage.getItem('books')),
            newBook: {
                title: '',
                author: '',
                publisher: '',
                paperback: '',
                isbn: '',
                summary: '',
                genre: '',
                posterURL: '',
                mostRecent: false,
                mostPopular: false,
                freeBook: false
            },
            readingMode: false 
        });
    }

    addBook(e) {
        e.preventDefault();
        const errors = this.validateForm(this.state.newBook);
        if (Object.keys(errors).length === 0) {
            let booksArr = JSON.parse(localStorage.getItem('books'));
            booksArr.push(this.state.newBook);
            localStorage.setItem('books', JSON.stringify(booksArr));
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('.modal__success').style.display = 'block';
        } else {
            this.setState({
                errors
            });
        }
    }

    validateForm(form) {
        const errors = {};
        if (form.title === '') {
            errors.title = 'Enter Title'
        }
        if (form.author === '') {
            errors.author = 'Enter Author'
        }
        if (form.publisher === '') {
            errors.publisher = 'Enter Publisher'
        }
        if (form.isbn !== '') {
            if (!form.isbn.match(/^\d+$/)) {
                errors.isbn = 'ISBN should contain only numbers'
            }
        }
        if (form.isbn === '') {
            errors.isbn = 'Enter ISBN'
        }
        return errors;
    }
       
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const book = this.state.newBook;
        book[name] = value;
        this.setState({
            newBook: book
        })
    }
    
    componentWillMount() {
        this.setState({
            booksArr: JSON.parse(localStorage.getItem('books'))
        })
    }

    readBook(item) {
        this.openModal();
        document.querySelector('.modal__toolbar').style.display = 'none';
        this.setState({
            newBook: item,
            readingMode: true
        });
        document.querySelector('.modal__h').innerHTML = item.title;
    }

    searchBooks(books, query) {
        const uppercasedQuery = query.toUpperCase();
        let foundBooks = books.filter(book => {
            let matches = false;
            for (let key in book) {
                if (typeof book[key] === 'boolean') continue; 
                if (book[key].toUpperCase().includes(uppercasedQuery)) {
                    matches = true;
                }
            }
            return matches;
        });
        return foundBooks;
    }

    render() {
        return (
            <main className="main">
                <Aside 
                    openModal={this.openModal}
                />
                <Content 
                    booksArr={this.state.booksArr}
                    readBook={this.readBook}
                    searchBooks={this.searchBooks}
                />
                <Modal
                    closeModal={this.closeModal}
                    newBook={this.state.newBook}
                    addBook={this.addBook}
                    handleChange={this.handleChange}
                    errors={this.state.errors}
                    readingMode={this.state.readingMode}
                />
            </main>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);