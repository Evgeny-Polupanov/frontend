import React from 'react';
import _ from '../style.scss';

class ModalContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.readingMode)      
        return (
            <div className="modal__content">
                <div id="modal__general">
                    <div className="modal__input-h">Title<span>*</span></div>
                    <input type="text" className="modal__input"
                        value={this.props.title} name="title" onChange={this.props.handleChange} placeholder="Enter Title" 
                    />
                    <div className="modal__notification">{this.props.errors.title}</div>
                    <div className="modal__input-h">Author<span>*</span></div>
                    <input type="text" className="modal__input" 
                        value={this.props.author} name="author" onChange={this.props.handleChange} placeholder="Enter Author" />
                    <div className="modal__notification">{this.props.errors.author}</div>
                    <div className="modal__input-h">Publisher<span>*</span></div>
                    <input type="text" className="modal__input"
                        value={this.props.publisher} name="publisher" onChange={this.props.handleChange} placeholder="Enter Publisher" />
                    <div className="modal__notification">{this.props.errors.publisher}</div>
                    <div className="modal__parameters">
                        <div className="modal__parameter">
                            <div className="modal__input-h">Paperback</div>
                            <input type="text" className="modal__input modal__input_mini"
                              value={this.props.paperback} name="paperback" onChange={this.props.handleChange} placeholder="Enter Paperback" />
                            <div className="modal__notification"></div>                        
                        </div>
                        <div className="modal__parameter">
                            <div className="modal__input-h">ISBN<span>*</span></div>
                            <input type="text" className="modal__input modal__input_mini"
                             value={this.props.isbn} name="isbn" onChange={this.props.handleChange} placeholder="Enter ISBN" />
                            <div className="modal__notification">{this.props.errors.isbn}</div>
                        </div>
                    </div>
                    <div className="modal__input-h">Summary</div>
                    <input type="text" className="modal__input"
                     value={this.props.summary} name="summary" onChange={this.props.handleChange} placeholder="Enter Summary" />
                    <div className="modal__notification"></div>
                </div>
                <div id="modal__genre" className="modal__hidden">
                    <div className="modal__input-h">Genre</div>
                    <input type="text" className="modal__input"
                     value={this.props.genre} name="genre" onChange={this.props.handleChange} placeholder="Enter Genre" />
                    <div className="modal__notification"></div>
                </div>
            </div>
        )
        else
        return (
            <div className="modal__content">
                <div id="modal__general">
                    <div className="modal__input-h">Title<span>*</span></div>
                    <p className="modal__input">{this.props.title}</p>
                    <div className="modal__notification">{this.props.errors.title}</div>
                    <div className="modal__input-h">Author<span>*</span></div>
                    <p className="modal__input">{this.props.author}</p>
                    <div className="modal__notification">{this.props.errors.author}</div>
                    <div className="modal__input-h">Publisher<span>*</span></div>
                    <p className="modal__input">{this.props.publisher}</p>
                    <div className="modal__notification">{this.props.errors.publisher}</div>
                    <div className="modal__parameters">
                        <div className="modal__parameter">
                            <div className="modal__input-h">Paperback</div>
                            <p className="modal__input modal__input_mini">{this.props.paperback}</p> 
                            <div className="modal__notification"></div>                        
                        </div>
                        <div className="modal__parameter">
                            <div className="modal__input-h">ISBN<span>*</span></div>
                            <p className="modal__input modal__input_mini">{this.props.isbn}</p>
                            <div className="modal__notification">{this.props.errors.isbn}</div>
                        </div>
                    </div>
                    <div className="modal__input-h">Summary</div>
                    <p className="modal__input">{this.props.summary}</p>
                    <div className="modal__notification"></div>
                </div>
                <div id="modal__genre" className="modal__hidden">
                    <div className="modal__input-h">Genre</div>
                    <p className="modal__input">{this.props.genre}</p>
                    <div className="modal__notification"></div>
                </div>
            </div>
        )
    }
}

export default ModalContent;