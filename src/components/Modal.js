import React from 'react';
import _ from '../style.scss';
import ModalTabs from './ModalTabs';
import ModalContent from './ModalContent';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
        this.chooseTab = this.chooseTab.bind(this);
    }

    chooseTab(e) {
        e.target.parentElement.childNodes.forEach(item => {
            item.className = 'modal__tab';
        });
        e.target.className = 'modal__tab modal__tab_active';
        let buttonsArr = [].slice.call(e.target.parentElement.childNodes);
        this.setState({
            currentTab: buttonsArr.indexOf(e.target)
        })
    }

    render() {
        return (
            <div className="modal__cover modal__cover_closed">
                <div className="modal">
                    <div className="modal__heading">
                        <div className="modal__h">Add New Books</div>
                        <button className="modal__close" onClick={this.props.closeModal}></button>
                    </div>
                    <form class="modal__form">
                        <div className="modal__wrapper">
                            <ModalTabs
                                tab={this.state.currentTab}
                                chooseTab={this.chooseTab}
                            />
                            <ModalContent
                                tab={this.state.currentTab}
                            />
                        </div>
                        <div className="modal__toolbar">
                            <button type="button" className="modal__cancel" onClick={this.props.closeModal}>Cancel</button>
                            <button type="submit" className="modal__submit">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal;