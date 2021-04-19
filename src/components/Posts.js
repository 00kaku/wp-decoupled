import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const Posts = ({posts}) =>{

	return (
		<div className="posts">
			{ posts? posts.map(post => (
				<div className="card" key={post.id}>
					<img
					src={post["_embedded"]["wp:featuredmedia"][0]["source_url"]}
					className="card__image"
					 alt="Image"/>
					<div className="container">
						<h4><b>{ReactHtmlParser(post.title.rendered)}</b></h4>
						{ReactHtmlParser(post.excerpt.rendered)}
						<button className="btn"><Link to={`/post/${post.id}`} onClick={()=>{localStorage.setItem('post',JSON.stringify(post))}}>Read More</Link></button>
					</div>
				</div>
			)) : <h1>Loading</h1> }
		</div>
	)

}

export default Posts;
