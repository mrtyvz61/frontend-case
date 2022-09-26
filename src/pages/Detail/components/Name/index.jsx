import React from 'react';

const Name = ({ name, type }) => {
	return (
		<tr
			key={'abc_1234'}
			className="border-b border-gray-200 dark:border-gray-700"
		>
			{type === 'common' ? (
				<>
					<td className="px-4 py-4">Common Name</td>
					<td>{name?.common ?? ''}</td>
				</>
			) : (
				<>
					<td className="px-4 py-4">Offical Name</td>
					<td>{name?.official ?? ''}</td>
				</>
			)}
		</tr>
	);
};

export default Name;
