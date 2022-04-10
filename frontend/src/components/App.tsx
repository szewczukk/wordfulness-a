import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailedLesson from './pages/DetailedLesson';
import Home from './pages/Home';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

const App: FC = () => (
	<div className="max-w-[1000px] p-4 mx-auto">
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<DetailedLesson />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	</div>
);

export default App;
