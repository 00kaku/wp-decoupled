import React from 'react';

const App = ({posts}) =>{
	console.log(posts[0])
	return(
		<div>
		<img src="https://mario.nintendo.com/static/746e0151f4a36a19a96198bd2d92d8d6/slide-pmok-0.png" />
			{ posts? posts.map(post => (
				<div key={post.id}>
					<h1>{post.title.rendered}</h1>
				</div>
			)) : <h1>Loading</h1> }
		</div>
	)
}

export default App;
