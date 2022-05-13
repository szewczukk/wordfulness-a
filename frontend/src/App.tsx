import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import DetailedCoursePage from './pages/DetailedCoursePage';
import DetailedLessonPage from './pages/DetailedLessonPage';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

const App: FC = () => (
	<div className="max-w-[1000px] p-4 mx-auto">
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/courses/:id" element={<DetailedCoursePage />} />
					<Route path="/lessons/:id" element={<DetailedLessonPage />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	</div>
);

export default App;
