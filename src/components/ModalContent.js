import React from 'react';
import _ from '../style.scss';

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {     
        return (
            <div className="modal__content">
                <div id="modal__general">
                    <div className="modal__input-h">Title<span>*</span></div>
                    <input type="text" className="modal__input" placeholder="Enter Title" />
                    <div className="modal__input-h">Author<span>*</span></div>
                    <input type="text" className="modal__input" placeholder="Enter Author" />
                    <div className="modal__input-h">Publisher<span>*</span></div>
                    <input type="text" className="modal__input" placeholder="Enter Publisher" />
                    <div className="modal__parameters">
                        <div className="modal__parameter">
                            <div className="modal__input-h">Paperback</div>
                            <input type="text" className="modal__input modal__input_mini" placeholder="Enter Paperback" />
                        </div>
                        <div className="modal__parameter">
                            <div className="modal__input-h">ISBN<span>*</span></div>
                            <input type="text" className="modal__input modal__input_mini" placeholder="Enter ISBN" />
                        </div>
                    </div>
                    <div className="modal__input-h">Summary</div>
                    <input type="text" className="modal__input" placeholder="Enter Summary" />
                </div>
                <div id="modal__genre" className="modal__hidden">
                    <div className="modal__input-h">Genre</div>
                    <input type="text" className="modal__input" placeholder="Enter Genre" />
                </div>
            </div>
        )
    }
}

export default ModalContent;