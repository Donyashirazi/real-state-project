import { Block, Page } from 'framework7-react';
import React from 'react';
import TopNavbar from '../components/navbar';
import { useFavoriteStore } from '../components/store';
import HouseCard from '../components/card';
import { data } from 'dom7';
import { useAllData } from '../components/useAllData';
import { id } from 'framework7/shared/utils';
import { all } from 'axios';

const FavoritesPage = () => {
	const { data: containerData } = useAllData();
	const favorites = useFavoriteStore((state) => state.favorites);

	const favorited = containerData.filter((eachCard) =>
		favorites.includes(eachCard.id)
	);

	return (
		<Page name="favorites">
			{favorited.map((eachOne) => (
				<HouseCard data={eachOne} />
			))}
		</Page>
	);
};

export default FavoritesPage;
