import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import getProducts from '../api/getProducts';

getProducts()
.then(posts => ReactDOM.hydrate(<App posts={posts} />, document.getElementById("root")) );
