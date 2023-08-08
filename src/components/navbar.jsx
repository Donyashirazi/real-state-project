import React from 'react';
import {
	Page,
	Navbar,
	NavLeft,
	NavTitle,
	NavTitleLarge,
	NavRight,
	Link,
} from 'framework7-react';

const TopNavbar = () => {
	return (
		<Navbar>
			<NavLeft>
				<Link
					backLink="Back"
					icon="icon-back"
					href="/home/"
				></Link>
			</NavLeft>
			<NavTitle>Find Your dream house ...</NavTitle>
			<NavRight>
				<Link href="/favorites/">Favorites</Link>
			</NavRight>
		</Navbar>
	);
};

export default TopNavbar;
