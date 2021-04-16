import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import getProducts from '../api/getProducts';
import { BrowserRouter } from 'react-router-dom';

getProducts()
.then(posts => ReactDOM.render(
<BrowserRouter>
<App posts={posts} />
</BrowserRouter>, document.getElementById("root")) );
