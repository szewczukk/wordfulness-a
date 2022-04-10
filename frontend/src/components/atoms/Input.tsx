import React, { FC, HTMLProps } from 'react';

type InputProps = Omit<HTMLProps<HTMLInputElement>, 'className'>;

const Input: FC<InputProps> = (props) => (
	<input className="border rounded p-2 outline-1 outline-gray-400" {...props} />
);

export default Input;
