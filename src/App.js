import React from 'react';
import Posts from './components/Posts';
import Post from './components/Post';
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom';
const App = ({posts}) =>{
	return(		<div>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Posts posts={posts} />
						</Route>
						<Route path="/post/:id">
							<Post />
						</Route>
					</Switch>
				</div>
	)
}

export default App;
