import React from 'react';
import _ from '../style.scss';

class ModalSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal__success">
                <div className="modal__success-content">
                    The book "{this.props.title}" successfully added.
                </div>
                <div className="modal__success-toolbar">
                    <button className="modal__submit" onClick={this.props.closeModal}>Close</button>
                </div>
            </div>
        )
    }
}

export default ModalSuccess;