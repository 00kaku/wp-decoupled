import fetch from 'isomorphic-fetch';

export default function getProducts () {
	return fetch("http://www.houstonzoo.org/wp-json/wp/v2/posts?_embed").
			then(res=> res.json());
}
