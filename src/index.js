import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import getProducts from '../api/getProducts';
import getCategories from '../api/getCategories';

import { BrowserRouter } from 'react-router-dom';

getCategories().
then(categories =>{
getProducts()
.then(posts => ReactDOM.render(
<BrowserRouter>
<App postData={posts.posts} categories={categories} totalPagesData={posts.totalPagesData} />
</BrowserRouter>, document.getElementById("root")) )
});
