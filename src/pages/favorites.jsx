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
	console.log('containerdata', containerData);
	const allId = containerData.map((eachcard) => eachcard.id);
	console.log('allid', allId);
	const favorit = favorites.map((eachid) => eachid);
	// const test = containerData?.map((eachCard) =>
	// 	eachCard.id(test) ? console.log('working') : ''
	// );
	console.log('allids', allId);
	console.log('favorites', favorites);
	console.log(favorites.includes(allId));
	console.log('containerdata', containerData);

	const resource = favorites.map((key) => containerData[key]);
	console.log('resource', resource);

	const now = containerData
		.filter((eachCard) => eachCard.id === favorites)
		?.map((fav, i) => console.log('fav', fav));

	console.log('now', now);

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
