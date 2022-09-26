import React from 'react';

const TextField = ({
	field,
	label,
	name,
	type = 'text',
	id,
	value,
	form: { touched, errors },
	...props
}) => {
	return (
		<>
			<div className={`text-field`}>
				<label
					htmlFor={type}
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{label}
				</label>
				<input
					id={id}
					type={type}
					{...field}
					{...props}
					className={`text-field__input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  ${
						touched[field.name] && errors[field.name]
							? ' text-field__input--error'
							: ''
					}`}
				/>
				{touched[field.name] && errors[field.name] && (
					<div className="text-field__input--error">{errors[field.name]}</div>
				)}
			</div>
		</>
	);
};

export default TextField;
