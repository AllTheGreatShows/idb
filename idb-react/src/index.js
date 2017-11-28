import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './About.css';
import './Media.css';
/*
import App from './App';
import Hello from './Hello';
import Mycard from './Card';
import Grid from './Grid';
import About from './About';
import Mycarousel from './Carousel';
*/
import NavBar from './NavBar';
import Media from './Media';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar />, document.getElementById('root'));
registerServiceWorker();
