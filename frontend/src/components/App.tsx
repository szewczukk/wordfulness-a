import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import FlashcardForm from './FlashcardForm';
import FlashcardList from './FlashcardList';

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

const App: FC = () => (
	<div className="max-w-[1000px] p-4 mx-auto">
		<ApolloProvider client={client}>
			<FlashcardList />
			<FlashcardForm />
		</ApolloProvider>
	</div>
);

export default App;
