import React,{useState } from 'react';
import Posts from './components/Posts';
import Post from './components/Post';
import Navbar from "./components/Navbar";
import {Switch, Route} from 'react-router-dom';
import getProductsWithFilters from '../api/getProductsWithFilters';

const App = ({postData,categories,totalPagesData}) =>{

	const [posts,setPosts] = useState(postData);
	const [pageNo,setPageNo] = useState(1);
	const [totalPages,setTotalPages] = useState(totalPagesData);
	const [categoriesArray,setCategoriesArray] = useState([]);

	const updatePage = (newPage) => {
		setPageNo(newPage);
		getProductsWithFilters(newPage,categoriesArray).
		then(data => {
						setPosts(data.posts);
						setTotalPages(data.totalPagesData);
					}).
		catch(err=> console.log(err));
	}

	const updatePosts = (event) =>{
		event.preventDefault();
		setPageNo(1);
		console.log(categoriesArray);
		getProductsWithFilters(1,categoriesArray).
		then(data => { console.log(data);
						setPosts(data.posts);
						setTotalPages(data.totalPagesData);
					}).
		catch(err=> console.log(err));
	}

	const updateCategories = (event,id) =>{
		const categories = [...categoriesArray];

		const index = categories.indexOf(id);

		index !== -1 ? categories.splice(index,1) : categories.push(id);

		console.log("up",categories);
		setCategoriesArray(categories);
	}

	console.log(totalPages)
	return(		<div >
					<Navbar />
					<Switch>
						<Route exact path="/">

							<form onSubmit={updatePosts} className="categories__filter">
								{
									categories?.map(category => {
										return (
										<div key={category.id} className="category">
										<input type="checkbox" value={category.id} onClick={event=>updateCategories(event,category.id)}/>
										<label htmlFor={category.name}>{category.name}</label>
										</div>
										)

									})
								}
								<input type="submit" />
							</form>
							<Posts posts={posts} />

								<div className="pagination">
									<button onClick={event=>{
									const newPage = (pageNo - 1);
									updatePage(newPage);
									}}
									disabled={pageNo === 1 }>Previous</button>

									<button onClick={()=>{
									const newPage = (pageNo + 1);
									updatePage(newPage);}}
									disabled={pageNo == totalPages }>Next</button>
								</div>

						</Route>

						<Route path="/post/:id">
							<Post />
						</Route>
					</Switch>
				</div>
	)
}

export default App;
