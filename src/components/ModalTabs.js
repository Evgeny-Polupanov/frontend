import React from 'react';
import _ from '../style.scss';

class ModalTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal__tabs">
                <div className="modal__tab modal__tab_active" onClick={this.props.chooseTab}>General</div>
                <div className="modal__tab" onClick={this.props.chooseTab}>Genre</div>
                <div className="modal__tab" onClick={this.props.chooseTab}>Poster</div>
                <div className="modal__tab" onClick={this.props.chooseTab}>Info</div>
            </div>
        )
    }
}

export default ModalTabs;