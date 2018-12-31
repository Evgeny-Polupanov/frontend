import React from 'react';
import ReactDOM from 'react-dom';
import _ from './style.scss';
import Aside from './components/Aside';
import Content from './components/Content';

ReactDOM.render(
    <main className="main">
        <Aside />
        <Content />
    </main>,
    document.getElementById('root')
);