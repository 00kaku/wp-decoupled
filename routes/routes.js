import Posts from '../src/components/Posts';
import Post from '../src/components/Post';

const routes =[
	{
		path:'/',
		exact:true,
		component:Posts
	},
	{
		path:'/post/:id',
		component:Post
	}
]

export default routes;
