import fetch from 'isomorphic-fetch';

export default function getProductsWithFilters (pageNo,categories) {
	const categoryList = categories.join(',');
	let totalPages=0;
	return fetch(`http://www.houstonzoo.org/wp-json/wp/v2/posts?_embed&per_page=6&page=${pageNo}
					${categories ? `&categories=${categoryList}` : ''}`).
			then(res=> {
				totalPages=res.headers.get('X-WP-TotalPages');
				return res.json() }).
			then(posts => {return {"posts":posts , "totalPagesData": totalPages}});
}
