import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import FlashcardList from './FlashcardList';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

const App: FC = () => (
	<ApolloProvider client={client}>
		<FlashcardList />
	</ApolloProvider>
);

export default App;
