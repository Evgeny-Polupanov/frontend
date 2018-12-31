import React from 'react';
import _ from '../style.scss';

class RecentActions extends React.Component {
    render() {
        return (
            <div className="recent-actions">
                <div className="recent-action">
                    <div className="recent-action__content">
                        You added <strong>Fight Club</strong> by <strong>Chuck Palahniuk</strong> to
                        your <strong>Must Read Titles</strong>
                    </div>
                    <div className="recent-action__time">
                        24 minutes ago
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentActions;