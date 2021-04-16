import fetch from 'isomorphic-fetch';

export default function getProducts () {
	return fetch("http://www.houstonzoo.org/wp-json/wp/v2/posts").
			then(res=> res.json());
}
