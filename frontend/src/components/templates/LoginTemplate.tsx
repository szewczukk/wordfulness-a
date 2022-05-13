import React, { FC } from 'react';
import LoginForm, { LoginFormValues } from '../organisms/LoginForm';

interface LoginTemplateProps {
	onSubmit: (values: LoginFormValues) => void;
}

const LoginTemplate: FC<LoginTemplateProps> = ({ onSubmit }) => (
	<LoginForm onSubmit={onSubmit} />
);

export default LoginTemplate;
