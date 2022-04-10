import React, { FC, FormEventHandler } from 'react';
import Input from '../atoms/Input';

interface FormFieldProps {
	type?: string;
	name: string;
	label: string;
	onChange: FormEventHandler<HTMLInputElement>;
}

const FormField: FC<FormFieldProps> = ({
	onChange,
	name,
	label,
	type = 'text',
}) => (
	<div className="flex flex-col gap-1">
		<label htmlFor={name}>{label}</label>
		<Input name={name} id={name} type={type} onChange={onChange} />
	</div>
);

export default FormField;
