import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Hello from './Hello';
import Mycard from './Card';
import Mycarousel from './Carousel';
import Grid from './Grid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mycarousel />, document.getElementById('root'));
registerServiceWorker();
