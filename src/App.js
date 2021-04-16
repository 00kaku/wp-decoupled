import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const App = ({posts}) =>{

	console.log(posts[0]);
	return(
		<div className="posts">
			{ posts? posts.map(post => (
				<div className="card" key={post.id}>
					<img
					src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
					className="card__image"
					 alt="Avatar"/>
					<div className="container">
						<h4><b>{ReactHtmlParser(post.title.rendered)}</b></h4>
						{ReactHtmlParser(post.excerpt.rendered)}
					</div>
				</div>
			)) : <h1>Loading</h1> }
		</div>
	)
}

export default App;
