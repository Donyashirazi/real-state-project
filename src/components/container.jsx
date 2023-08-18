import { Block, BlockTitle, Page } from 'framework7-react';
import React from 'react';
import { useAllData } from './useAllData';
import HouseCard from './card';
import './container.scss';

const Container = (props) => {
	const { inputText } = props;
	console.log('inputtext', inputText);
	const { data: containerData } = useAllData();

	const filteredData = containerData?.filter((e) => {
		if (inputText === '') {
			return e;
		} else {
			return e.location.toLowerCase().includes(inputText.toLowerCase());
		}
	});
	console.log('111', filteredData);

	return (
		<Page
			name="container"
			className="card-container"
		>
			<div className="grid grid-cols-1 medium-grid-cols-2 large-grid-cols-3 grid-gap page-content2">
				{filteredData?.map((eachCard, i) => (
					<div>
						<HouseCard
							data={eachCard}
							key={filteredData.id}
						/>
					</div>
				))}
			</div>
		</Page>
	);
};

export default Container;
