import React, { useContext } from 'react';
import { AuthContext } from '@context/auth';

const Navbar = () => {
	const [state, dispatch, { logout }] = useContext(AuthContext);
	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200">
			<div className="flex flex-wrap justify-end items-center mx-auto">
				<div>
					<button
						type="button"
						onClick={() => logout()}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
