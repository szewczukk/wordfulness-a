import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormValues } from 'src/components/organisms/LoginForm';
import LoginTemplate from 'src/components/templates/LoginTemplate';
import {
	FetchCurrentUserDocument,
	FetchCurrentUserQuery,
	useLoginMutation,
} from 'src/generated/graphql';

const LoginPage: FC = () => {
	const navigate = useNavigate();
	const [login] = useLoginMutation();

	const handleSubmit = async (values: LoginFormValues) => {
		await login({
			variables: values,
			update: (store, { data: response, errors }) => {
				const data = store.readQuery<FetchCurrentUserQuery>({
					query: FetchCurrentUserDocument,
				});
				console.log(errors, data);

				if (response?.login) {
					store.writeQuery<FetchCurrentUserQuery>({
						query: FetchCurrentUserDocument,
						data: {
							me: {
								id: response.login.id,
								username: response.login.username,
								__typename: 'User',
							},
							__typename: 'Query',
						},
					});
				} else {
					console.error('Error while updating cache');
				}
			},
		});
		navigate('/', { replace: true });
	};

	return <LoginTemplate onSubmit={handleSubmit} />;
};

export default LoginPage;
