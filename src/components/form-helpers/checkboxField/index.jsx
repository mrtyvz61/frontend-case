import React from 'react';

const CheckboxField = ({ field, type = 'checkbox', checked, label }) => {
	return (
		<>
			<div className="flex items-start">
				<div className="flex items-center h-5">
					<input
						{...field}
						type={type}
						checked={checked}
						className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
					/>
				</div>
				<div className="ml-3 text-sm">
					<label htmlFor={type} className="text-gray-500 dark:text-gray-300">
						{label}
					</label>
				</div>
			</div>
		</>
	);
};

export default CheckboxField;
