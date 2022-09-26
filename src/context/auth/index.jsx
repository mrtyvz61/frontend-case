/* eslint-disable valid-jsdoc */
import React, { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onLoginHandler } from '@utils/services';
import { notify } from '@components/toastify';
import { toastifyTypes } from '@constants';
import { useLocalStorage } from '@hooks/useLocalStorage';

// Create Context
export const AuthContext = createContext();

// Initial State of Context
const initialState = {
	user: null,
};

// Action Types of Context
export const AUTH_ACTION_TYPES = {
	SET_USER: '@auth/SET_USER',
};

// Auth Reducer Function of Context
const authReducer = (state, action) => {
	switch (action.type) {
		case AUTH_ACTION_TYPES.SET_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

/**
 * @description Auth context provider component that wraps the app and provides the auth context to all child components
 */
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useLocalStorage('user', null);
	const navigate = useNavigate();

	const [state, dispatch] = React.useReducer(authReducer, initialState);

	useEffect(() => {
		// set user in context state from local storage on app load
		if (user) dispatch({ type: AUTH_ACTION_TYPES.SET_USER, payload: user });
	}, [user]); // run this effect only when user state changes

	/**
	 * @description Login function that sets the user in the state and local storage after successful login
	 */
	const login = async ({ email, password, rememberMe }) => {
		const response = await onLoginHandler(email, password);
		const { token, err } = response;
		debugger;
		// if there is an error, return the error
		if (err) {
			notify(err, toastifyTypes.error);
			return;
		}
		if (token) {
			if (rememberMe) {
				setUser(token);
			}
			// if there is no error, and token is present
			dispatch({ type: AUTH_ACTION_TYPES.SET_USER, payload: token });
			// navigate to country list page after login is successful
			navigate('/countries/list', { replace: true });
		}
	};

	const logout = () => {
		// remove the user from the local storage
		setUser(null);
		// set the user in the state to null
		dispatch({ type: AUTH_ACTION_TYPES.SET_USER, payload: null });
		// navigate to login page after logout
		navigate('/', { replace: true });
	};

	return (
		<AuthContext.Provider value={[state, dispatch, { login, logout }]}>
			{children}
		</AuthContext.Provider>
	);
};
