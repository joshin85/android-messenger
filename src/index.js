import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import './styles/font-awesome/css/font-awesome.css';
import './styles/roboto.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
