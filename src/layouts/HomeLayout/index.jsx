import React, { useContext } from 'react';
import { Navigate, useOutlet } from 'react-router-dom';
import { AuthContext } from '@context/auth';

/**
 * @description HomeLayout component is used to render the home routes of the application
 * and it is used to check if the user is authenticated or not and if yes it will redirect to the countries list page
 * @return {JSX.Element}
 */
const HomeLayout = () => {
	const outlet = useOutlet();
	const [state] = useContext(AuthContext);

	if (state?.user) return <Navigate to="/countries/list" replace />;

	return <>{outlet}</>;
};

export default HomeLayout;
