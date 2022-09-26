import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onHandlerGetCountry } from '@utils/services';
import { isArrayNotEmpty } from '@utils';
import Flag from '@pages/Detail/components/Flag';
import Name from '@pages/Detail/components/Name';
import Currency from '@pages/Detail/components/Currency';
import Language from '@pages/Detail/components/Language';

const Detail = () => {
	const { alphaCode } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await onHandlerGetCountry(alphaCode);
			if (response) setData(response);
		})();
	}, [alphaCode]);

	return (
		<div className="flex items-center justify-center h-screen overflow-x-auto relative">
			<table className="table-auto text-sm text-left text-gray-500">
				<tbody>
					{isArrayNotEmpty(data) &&
						data.map((item) => (
							<React.Fragment key={123}>
								<Name name={item?.name} type="common" />
								<Name name={item?.name} type="offical" />
								<Currency currency={item?.currencies} />
								<Language languages={item?.languages} />
								<Flag flags={item?.flags} />
							</React.Fragment>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Detail;
