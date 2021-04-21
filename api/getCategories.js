import fetch from 'isomorphic-fetch';

export default function getCategories() {
	return fetch("https://www.houstonzoo.org/wp-json/wp/v2/categories?per_page=100").
			then(res=> res.json());
}
