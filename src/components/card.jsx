import {
	CardContent,
	Card,
	CardFooter,
	CardHeader,
	Link,
} from 'framework7-react';
import React, { useState } from 'react';
import { useFavoriteStore } from './store';

const HouseCard = ({ data }) => {
	const favorites = useFavoriteStore((state) => state.favorites);
	const addFavorite = useFavoriteStore((state) => state.addFavorite);
	const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
	const [isChosen, setIsChosen] = useState(
		favorites.some((f) => f === data.id)
	);

	const toggleInClick = () => {
		if (!isChosen) {
			addFavorite(data.id);
			setIsChosen(true);
		} else {
			removeFavorite(data.id);
			setIsChosen(false);
		}
	};

	return (
		<Card
			className="demo-card-header-pic"
			key={data.id}
		>
			<CardHeader
				className="no-border"
				valign="bottom"
				style={{
					height: '40vh',
					backgroundImage: `url(${data.images})`,
				}}
			>
				{data.title}
			</CardHeader>
			<CardContent>
				<p className="block-title-medium">{data.price}</p>
				<p>{data.location}</p>
				<p>{data.description}</p>
			</CardContent>
			<CardFooter>
				<div className="like-section">
					<Link
						onClick={() => {
							toggleInClick();
						}}
					>
						<i
							className={`f7-icons size-14 ${
								isChosen && 'icon-color'
							}`}
						>
							heart_fill
						</i>
					</Link>
				</div>

				<Link onClick={() => {}}>Read more</Link>
			</CardFooter>
		</Card>
	);
};

export default HouseCard;
