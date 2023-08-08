import axios from 'axios';
import { useQuery } from 'react-query';

const fetchData = async () => {
	const response = await axios.get('http://localhost:8000/properties');
	return response.data;
};

export const useAllData = (onSuccess, onError) => {
	return useQuery(['allStateData'], fetchData, {
		cacheTime: 50000,
		staleTime: 30000,
		keepPreviousData: true,
		onSuccess,
		onError,
		select: (data) => {
			return data;
		},
	});
};
