import axios from 'axios';
import { requestHeaders } from '@hooks/useFetch/utils/config';
import { HTTPMethodEnum } from '@hooks/useFetch/utils/types';

const Request = () => {
	const call = async (url, method, reqHeaders, data) => {
		const headers = Object.assign(
			Object.assign({}, requestHeaders),
			reqHeaders,
		);
		const reqObj = {
			method,
			url,
			headers,
			data,
		};

		try {
			const res = await axios(reqObj);
			return res;
		} catch (error) {
			const responseError = {};
			responseError.code = 0;
			responseError.message = 'Something went wrong';
			if (error.response) {
				const errMessage = error.response.data.message;
				responseError.code = error.response.status;
				if (errMessage) {
					responseError.message = errMessage;
				}
			} else if (error.request) {
			} else if (error.message) {
				responseError.message = error.message;
			}
			return responseError;
		}
	};

	const get = (url, reqHeader) => call(url, HTTPMethodEnum.GET, reqHeader);
	const post = (url, reqBody, reqHeader) =>
		call(url, HTTPMethodEnum.POST, reqHeader, reqBody);
	// if need can add more methods like put, delete, patch

	return { get, post };
};

export { Request };
