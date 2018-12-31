import React from 'react';
import _ from '../style.scss';
import ContentHeading from './ContentHeading';
import ContentContainer from './ContentContainer';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <ContentHeading />
                <ContentContainer />
            </div>
        )
    }
}

export default Content;