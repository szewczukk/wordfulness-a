import React, { FC, HTMLProps } from 'react';

type InputProps = HTMLProps<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...rest }) => (
	<input
		className={`border rounded p-2 outline-1 outline-gray-400 ${className}`}
		{...rest}
	/>
);

export default Input;
