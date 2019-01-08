import React from 'react';
import ReactDOM from 'react-dom';
import _ from './style.scss';
import Aside from './components/Aside';
import Content from './components/Content';
import storedBooks from './Books.js';
import Modal from './components/Modal';

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
            errors: {}
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addBook = this.addBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.readBook = this.readBook.bind(this);
    }

    openModal() {
        document.querySelector('.modal__cover').className = 'modal__cover';
        document.querySelector('.modal__toolbar').style.display = 'flex';
    }

    closeModal() {
        document.querySelector('.modal__cover').className = 'modal__cover modal__cover_closed';
        this.setState({
            booksArr: JSON.parse(localStorage.getItem('books')),
            newBook: {
                title: '',
                author: '',
                publisher: '',
                paperback: '',
                isbn: 1,
                summary: '',
                genre: '',
                posterURL: '',
                mostRecent: false,
                mostPopular: false,
                freeBook: false
            } 
        })
    }

    addBook(e) {
        e.preventDefault();
        const errors = this.validateForm(this.state.newBook);
        if (Object.keys(errors).length === 0) {
            let booksArr = JSON.parse(localStorage.getItem('books'));
            booksArr.push(this.state.newBook);
            localStorage.setItem('books', JSON.stringify(booksArr));
            this.closeModal();
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
        if (form.isbn !== '') {
            if (!form.isbn.match(/\d+/)) {
                errors.isbn = 'ISBN should contain only numbers'
            }
        }
        return errors;
    }
       
    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
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
            newBook: item
        })
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
                />
                <Modal
                    closeModal={this.closeModal}
                    newBook={this.state.newBook}
                    addBook={this.addBook}
                    handleChange={this.handleChange}
                    errors={this.state.errors}
                />
            </main>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);