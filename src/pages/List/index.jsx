import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { onHandlerGetCountries } from '@utils/services';
import { isArrayNotEmpty } from '@utils';
import { useModal } from '@hooks/useModal';
import { IconEye, IconClose } from '@components/icons';

const tableHeader = [
	{
		name: 'CCA2',
		field: 'cca2',
	},
	{
		name: 'Common Name',
		key: 'name.common',
	},
	{
		name: 'Capital',
		key: 'capital',
	},
	{
		name: 'Actions',
		key: 'actions',
	},
];

const List = () => {
	const navigate = useNavigate();
	const [modalContent, setModalContent] = useState(null);
	const [Modal, open, close, isOpen] = useModal('body', {
		preventScroll: true,
		closeOnOverlayClick: true,
		zIndex: 1040,
		bgColor: 'rgba(0, 0, 0, 0.8)',
	});

	const { isLoading, error, data, isSuccess } = useQuery(
		'countries',
		() => onHandlerGetCountries(),
		{
			keepPreviousData: false,
			staleTime: Infinity,
		},
	);

	if (error) {
		return <p>Error</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	console.log(data);

	if (isSuccess) {
		return (
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							{isArrayNotEmpty(tableHeader) &&
								tableHeader.map((item, index) => (
									<th key={index} className="px-4 py-6">
										{item.name}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{isArrayNotEmpty(data) &&
							data.map((item, index) => (
								<tr
									key={index}
									className="border-b border-gray-200 hover:bg-gray-100"
								>
									<td
										className="py-4 px-6"
										onClick={() => {
											setModalContent(item.name);
											open();
										}}
									>
										{item.cca2 ?? ''}
									</td>
									<td className="py-4 px-6">{item?.name?.common ?? ''}</td>
									<td className="py-4 px-6">{item?.capital ?? ''}</td>
									<td
										className="py-4 px-6"
										onClick={() => navigate(`/countries/${item?.cca2}`)}
									>
										<IconEye />
									</td>
								</tr>
							))}
					</tbody>
				</table>
				{isOpen && (
					<Modal>
						<div className="relative w-full max-w-2xl h-full md:h-auto">
							<div className="relative bg-white rounded-lg shadow ">
								<div className="flex justify-between items-start p-4 rounded-t border-b ">
									<h3 className="text-xl font-semibold text-gray-900 ">
										Country Detail
									</h3>
									<button
										type="button"
										onClick={close}
										className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
									>
										<IconClose />
									</button>
								</div>
								<div className="p-6 space-y-6">
									{modalContent.nativeName &&
									modalContent.nativeName !== undefined ? (
										Object.entries(modalContent.nativeName)
											.map(([key, value]) => value)
											.map((item, index) => (
												<p key={index} className="text-gray-600">
													{Object.values(item).reverse().join(' - ')}
												</p>
											))
									) : (
										<p className="text-gray-600">
											Sorry, No Information about this country yet.
										</p>
									)}
								</div>
								<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
									<button
										type="button"
										onClick={close}
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		);
	}
};

export default List;
