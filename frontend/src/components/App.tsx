import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DetailedCourse from './pages/DetailedCourse';
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
				<Link to="/" className="mb-8 block cursor-pointer hover:underline">
					Home
				</Link>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/courses/:id" element={<DetailedCourse />} />
					<Route path="/lessons/:id" element={<DetailedLesson />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	</div>
);

export default App;
