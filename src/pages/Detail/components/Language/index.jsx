import React from 'react';

const Language = ({ languages }) => {
	return (
		<tr key={'abc_1'} className="border-b border-gray-200 dark:border-gray-700">
			<td key={1} className="px-4 py-4">
				Currencies
			</td>
			<td key={2}>
				{Object.keys(languages).length === 0 ? null : (
					<>
						{' '}
						{Object.keys(languages ?? {})
							.map((key) => languages[key])
							.join(' | ')}
					</>
				)}
			</td>
		</tr>
	);
};

export default Language;
