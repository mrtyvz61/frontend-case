import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// layouts
import HomeLayout from '@layouts/HomeLayout';
import ProtectedLayout from '@layouts/ProtectedLayout';
// components
import Loadable from '@components/Loadable';
// Pages to render for each route
const LoginPage = Loadable(lazy(() => import('@pages/Login')));
const ListPage = Loadable(lazy(() => import('@pages/List')));
const DetailPage = Loadable(lazy(() => import('@pages/Detail')));
const NoMatchPage = Loadable(lazy(() => import('@pages/NoMatch')));

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route element={<HomeLayout />}>
						<Route path="/" element={<LoginPage />} />
						<Route path="/login" element={<LoginPage />} />
					</Route>
					<Route path="/countries" element={<ProtectedLayout />}>
						<Route path="list" element={<ListPage />} />
						<Route path=":alphaCode" element={<DetailPage />} />
					</Route>
					<Route path="*" element={<NoMatchPage />} />
				</Routes>
			</QueryClientProvider>
			<ToastContainer />
		</>
	);
}

export default App;
