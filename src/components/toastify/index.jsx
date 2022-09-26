import React from 'react';
import { toast } from 'react-toastify';

export const notify = (message, type) =>
	toast(<p style={{ fontSize: 16 }}>{message}</p>, {
		position: 'top-right',
		autoClose: 2500,
		hideProgressBar: false,
		newestOnTop: true,
		closeOnClick: true,
		rtl: false,
		pauseOnFocusLoss: true,
		draggable: true,
		pauseOnHover: true,
		type: type,
	});
