import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MovieList />, document.getElementById('root'));
registerServiceWorker();
