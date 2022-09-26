/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
	const navigate = useNavigate();

	const onHandlerToHomePage = () => {
		navigate('/');
	};

	return (
		<section className="flex items-center h-full p-16">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-9xl">
						<span className="sr-only">Error</span>404
					</h2>
					<p className="text-2xl font-semibold md:text-3xl">
						Sorry, we couldn't find this page.
					</p>
					<button
						type="button"
						onClick={onHandlerToHomePage}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
					>
						Back to homepage
					</button>
				</div>
			</div>
		</section>
	);
};

export default NoMatch;
