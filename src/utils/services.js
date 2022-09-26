import { Request } from '@hooks/useFetch';
import { awaitHandler } from '@hooks/useFetch/utils/awaitHandler';

/**
 * @description  hook crud service for api calls with axios and response handling...
 */
const { post, get } = Request();

/**
 * @description we may use environment variables to store the urls and use them instead of using objects
 */
const endpoint = {
	login: 'https://reqres.in/api/login',
	list: 'https://restcountries.com/v3.1/all',
	detail: 'https://restcountries.com/v3.1/alpha',
};

/**
 * @description this function will handle the login request and return the response data
 * @param {*} email
 * @param {*} password
 * @return  {Promise}
 */
export const onLoginHandler = async (email, password) => {
	const response = await awaitHandler(
		post(endpoint.login, { email, password }),
	);
	const { res, err } = response;
	if (err) {
		return { err: err.message };
	}
	return res.data;
};

/**
 * @description this function will handle the fetch Countries list request and return the response data
 * @return  {Promise}
 */
export const onHandlerGetCountries = async () => {
	const response = await awaitHandler(get(endpoint.list));
	const { res, err } = response;
	if (err) {
		return { err: err.message };
	}
	return res.data;
};

/**
 * @desciption this function will handle the fetch Country detail request via alphaCode and return the response data
 * @param {*} country
 * @return {Promise}
 */
export const onHandlerGetCountry = async (country) => {
	const response = await awaitHandler(get(`${endpoint.detail}/${country}`));
	const { res, err } = response;
	if (err) {
		return { err: err.message };
	}
	return res.data;
};
