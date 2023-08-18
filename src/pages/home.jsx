import React, { useState } from 'react';
import {
	Page,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	NavRight,
	Link,
	Toolbar,
	Block,
	BlockTitle,
	List,
	ListItem,
	Button,
	View,
	PageContent,
} from 'framework7-react';
import { useAllData } from '../components/useAllData';
import AllHouses from '../components/allHouses';
import Card from '../components/card';
import HouseCard from '../components/card';
import Container from '../components/container';
import axios from 'axios';
import SeachBox from '../components/seachBox';
import Navbar from '../components/navbar';
import Navbarsss from '../components/navbar';
import TopNavbar from '../components/navbar';
import Panel from '../components/panel';
import Panels from '../components/panel';

const HomePage = () => {
	const [inputText, setInputText] = useState('');

	const onSuccess = (data) => {
		console.log('perform after fetching', data);
	};
	const onError = (error) => {
		console.log('perform after error', err);
	};
	const {
		data: houseData,
		isLoading,
		error,
		isError,
		isFetching,
	} = useAllData(onSuccess, onError);

	return (
		<View>
			<TopNavbar />

			<Page
				name="/home/"
				className="search-box"
			>
				<SeachBox setInputText={setInputText} />
				<Container inputText={inputText} />
			</Page>
		</View>
	);
};
export default HomePage;
