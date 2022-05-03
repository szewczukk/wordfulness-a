import React, { FC, FormEventHandler } from 'react';
import Input from '../atoms/Input';

interface FormFieldProps {
	type?: string;
	value?: string;
	name: string;
	label: string;
	error?: string;
	onChange: FormEventHandler<HTMLInputElement>;
}

const FormField: FC<FormFieldProps> = ({
	onChange,
	name,
	label,
	value,
	error,
	type = 'text',
}) => (
	<div className="flex flex-col gap-1">
		<label htmlFor={name}>{label}</label>
		<Input
			name={name}
			id={name}
			type={type}
			placeholder={label}
			onChange={onChange}
			value={value}
		/>
		<p className="text-red-400">{error}</p>
	</div>
);

export default FormField;
