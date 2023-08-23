import { BlockTitle, Icon, List, ListInput, Searchbar } from 'framework7-react';
import React, { useState } from 'react';

const SeachBox = (props) => {
	const { setInputText, inputText } = props;
	console.log('inputtttttt', inputText);

	return (
		<>
			{/* <List
				strongIos
				dividersIos
				insetIos
			>
				<ListInput
					type="text"
					placeholder="Your location"
					clearButton
				>
					<Icon
						icon="demo-list-icon"
						slot="media"
					/>
				</ListInput>
			</List> */}{' '}
			<Searchbar
				className="searchbar-demo"
				searchContainer=".search-list"
				searchIn=".item-title"
				onChange={(e) => setInputText(e.target.value)}
				placeholder="location"
			/>
		</>
	);
};

export default SeachBox;
