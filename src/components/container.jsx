import { Block, BlockTitle, Page } from 'framework7-react';
import React from 'react';
import { useAllData } from './useAllData';
import HouseCard from './card';
import './container.scss';

const Container = () => {
	const { data: containerData } = useAllData();

	return (
		<Page
			name="container"
			className="card-container"
		>
			<div className="grid grid-cols-1 medium-grid-cols-2 large-grid-cols-3 grid-gap page-content2">
				{containerData?.map((eachCard, i) => (
					<div>
						<HouseCard
							data={eachCard}
							key={containerData.id}
						/>
					</div>
				))}
			</div>
		</Page>
	);
};

export default Container;
