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
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        document.querySelector('.modal__cover').className = 'modal__cover';
    }

    closeModal() {
        document.querySelector('.modal__cover').className = 'modal__cover modal__cover_closed';
    }

    render() {
        return (
            <main className="main">
                <Aside 
                    openModal={this.openModal}
                />
                <Content />
                <Modal
                    closeModal={this.closeModal}
                />
            </main>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);