import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetch = () => {
	const [fetchData, setFetchData] = useState();

	axios.get('http://localhost:8000/properties').then((res) => {
		console.log(res.data);
		const myData = res.data;
		setFetchData(myData);
	});
	useEffect(() => getData, []);

	return fetchData;
};

export default DataFetch;
