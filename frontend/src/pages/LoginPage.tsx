import React, { FC } from 'react';
import { LoginFormValues } from 'src/components/organisms/LoginForm';
import LoginTemplate from 'src/components/templates/LoginTemplate';
import { useLoginMutation } from 'src/generated/graphql';

const LoginPage: FC = () => {
	const [login] = useLoginMutation();

	const handleSubmit = (values: LoginFormValues) => {
		login({ variables: values });
	};

	return <LoginTemplate onSubmit={handleSubmit} />;
};

export default LoginPage;
