import React, { useState, useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

import {
	f7,
	f7ready,
	App,
	Panel,
	Views,
	View,
	Popup,
	Page,
	Navbar,
	Toolbar,
	NavRight,
	Link,
	Block,
	BlockTitle,
	LoginScreen,
	LoginScreenTitle,
	List,
	ListItem,
	ListInput,
	ListButton,
	BlockFooter,
} from 'framework7-react';

import routes from '../js/routes';
import store from '../js/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import Test from './test';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const MyApp = () => {
	// Login screen demo data
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// Framework7 Parameters
	const f7params = {
		name: 'Real State', // App name
		theme: 'auto', // Automatic theme detection

		darkMode: true,

		// App store
		store: store,
		// App routes
		routes: routes,

		// Register service worker (only on production build)
		serviceWorker:
			process.env.NODE_ENV === 'production'
				? {
						path: '/service-worker.js',
				  }
				: {},
	};

	const alertLoginData = () => {
		f7.dialog.alert(
			'Username: ' + username + '<br>Password: ' + password,
			() => {
				f7.loginScreen.close();
			}
		);
	};
	f7ready(() => {
		// Call F7 APIs here
	});
	const client = new QueryClient();

	return (
		<QueryClientProvider client={client}>
			<App {...f7params}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/about/"
							element={<AboutPage />}
						/>
						<Route
							path="/"
							element={<HomePage />}
						/>
					</Routes>
				</BrowserRouter>
				<View
					main
					url="/"
				/>
			</App>
			<ReactQueryDevtools
				initialIsOpen={false}
				position="bottom-left"
			/>
		</QueryClientProvider>
	);
};
export default MyApp;
