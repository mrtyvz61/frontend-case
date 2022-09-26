import React from 'react';
import { isArrayNotEmpty } from '@utils';

const Currency = ({ currency }) => {
	const value = Object.values(currency);
	console.log('value', value);

	return (
		<tr key={'abc_1'} className="border-b border-gray-200 dark:border-gray-700">
			<td key={1} className="px-4 py-4">
				Currencies
			</td>
			<td key={2}>
				{isArrayNotEmpty(value) && (
					<>
						{Object.keys(value[0] ?? {})
							.map((key) => value[0][key])
							.join(' - ')}
					</>
				)}
			</td>
		</tr>
	);
};

export default Currency;
