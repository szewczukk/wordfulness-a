import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonRole = 'danger' | 'success' | 'info';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	role: ButtonRole;
}

const getStyles = (role: ButtonRole): string => {
	switch (role) {
		case 'info':
			return 'bg-blue-500';
		case 'success':
			return 'bg-green-500';
		case 'danger':
			return 'bg-red-500';
		default:
			return '';
	}
};

const Button: FC<ButtonProps> = ({ role, className, ...rest }) => (
	<button
		className={`py-2 px-4 rounded text-white ${getStyles(role)} ${className}`}
		{...rest}
	/>
);

export default Button;
