import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import getProducts from '../api/getProducts';
import getCategories from '../api/getCategories';

import App from '../src/App';
import Post from '../src/components/Post';
import { StaticRouter } from 'react-router-dom';

import {matchPath} from 'react-router-dom';
import routes from '../routes/routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {


	getCategories()
	.then(categories =>{
		getProducts()
		.then (posts => {
			const context ={};
			const app = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<App postData={posts.posts} categories={categories} totalPagesData={posts.totalPagesData}/>
			</StaticRouter>
		);

		const indexFile = path.resolve('./build/index.html');

		fs.readFile(indexFile, 'utf8', (err, data) => {
			if (err) {
			console.error('Something went wrong:', err);
			return res.status(500).send('Oops, better luck next time!');
			}

			return res.send(
				data.replace('<div id="root"></div>',`<div id="root">${app}</div>`)
			);
		});
		})
	});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
