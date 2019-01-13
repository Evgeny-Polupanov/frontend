import React from 'react';
import _ from '../style.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.searchSubmit(this.state.value);
    }

    render() {
        return (
            <form className="content__search" onSubmit={this.onSubmit}>
                <textarea className="content__search-input" 
                onChange={this.onChange} 
                name="search" placeholder="Enter a keyword" 
                value={this.state.value}
                />
                <button type="submit" className="content__search-submit"></button>
            </form>
        )
    }
}

export default Search;