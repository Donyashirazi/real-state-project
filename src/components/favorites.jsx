import React from 'react';
import HouseCard from './card';

const Favorites = () => {
	const favorites = useStore((state) => state.favorites);

	return (
		<div>
			<HouseCard />
		</div>
	);
};

export default Favorites;
