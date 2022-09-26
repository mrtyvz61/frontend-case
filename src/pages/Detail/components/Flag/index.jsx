import React from 'react';

const Flag = ({ flags }) => {
	return (
		<tr key={'abc_1'} className="border-b border-gray-200 dark:border-gray-700">
			<td key={1} className="px-4 py-4">
				Flag
			</td>
			<td key={2}>
				{Object.keys(flags).length === 0 ? null : (
					<img
						src={flags?.svg ? flags.svg : flags.png}
						className=" h-10 w-10  rounded-full lazy"
						alt="flag"
					/>
				)}
			</td>
		</tr>
	);
};

export default Flag;
