import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Styles/index.css';
import './Styles/roboto.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
