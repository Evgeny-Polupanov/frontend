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
                    <div className="modal__notification"></div>
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
                <div id="modal__poster" className="modal__hidden">
                    <div className="modal__input-h">Poster URL</div>
                    <input type="text" className="modal__input"
                        value={this.props.posterURL} name="posterURL" onChange={this.props.handleChange}
                        placeholder="Enten poster URL address" 
                    />
                    <div className="modal__notification"></div>
                </div>
                <div id="modal__info" className="modal__hidden">
                    <label>
                        <input type="checkbox" name="mostRecent" value={this.props.mostRecent} onChange={this.props.handleChange} />
                        <span className="modal__input-h">Most Recent</span>
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="mostPopular" value={this.props.mostPopular} onChange={this.props.handleChange} />
                        <span className="modal__input-h">Most Populap</span>
                    </label>
                    <br />
                    <label>
                        <input type="checkbox" name="freeBook" value={this.props.freeBook} onChange={this.props.handleChange} />
                        <span className="modal__input-h">Free Book</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default ModalContent;