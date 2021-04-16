import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import getProducts from '../api/getProducts';
import App from '../src/App';
import Post from '../src/components/Post';
import { StaticRouter } from 'react-router-dom';

import {matchPath} from 'react-router-dom';
import routes from '../routes/routes';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
	getProducts()
	.then (posts => {
		const context ={};
		const app = ReactDOMServer.renderToString(
		<StaticRouter location={req.url} context={context}>
			<App posts={posts} />
		</StaticRouter>
	);

	if(context.url)
	{ redirect(req.url)
	}

	else{
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
	}
	})
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
