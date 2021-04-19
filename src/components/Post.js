import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Post = () =>{
	const post = JSON.parse(localStorage.getItem('post'));
	console.log(post);
	return (
		<div className="post">
			{ReactHtmlParser(post.content.rendered)}

		</div>
	)

}

export default Post;
