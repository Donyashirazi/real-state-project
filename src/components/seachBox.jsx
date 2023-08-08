import { BlockTitle, Icon, List, ListInput, Searchbar } from 'framework7-react';
import React from 'react';

const SeachBox = () => {
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
			/>
		</>
	);
};

export default SeachBox;
