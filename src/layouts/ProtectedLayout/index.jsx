import React, { useContext } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { AuthContext } from '@context/auth';
// components
import Navbar from '@components/navbar';

/**
 * @description ProtectedLayout component is used to render the protected routes of the application
 * and it is used to check if the user is authenticated or not and if not it will redirect to the login page
 * @return {JSX.Element}
 */
const ProtectedLayout = () => {
	const outlet = useOutlet();
	const [state] = useContext(AuthContext);

	if (!state?.user) return <Navigate to="/" />;

	return (
		<>
			<Navbar />
			{outlet}
		</>
	);
};

export default ProtectedLayout;
