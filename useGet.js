import { useState, useEffect, useCallback } from 'react';

XMLHttpRequest.prototype.setHeaders = setHeaders;

export default function useGet(url, headers) {

	const [ req ] = useState(new XMLHttpRequest());
	const [ res, setRes ] = useState("[]");

	const get = useCallback((params) => {
		const query = typeof params === 'string' ? params : toQuery(params);
		req.open("GET", url + query, true);
		req.setHeaders(headers);
		req.send();
	}, []);

	useEffect(() => req.onload = () => setRes(req.response), []);

	return [ res, get, req ];
}

function toQuery(params) {
	let query = '?';

	for (let key in params) {
		query += key + '=' + params[ key ] + '&';
	}
	return query.slice(0, query.length - 1);
}

function setHeaders(headers) {
	for (let header in headers)
		this.setRequestHeader(header, headers[ header ]);
}