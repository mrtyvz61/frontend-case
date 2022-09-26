import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '@context/auth';

import TextField from '@components/form-helpers/textField';
import CheckboxField from '@components/form-helpers/checkboxField';

const Login = () => {
	const [state, dispatch, { login }] = useContext(AuthContext);

	// Initial values for the form fields
	const initialValues = {
		email: '',
		password: '',
		rememberMe: false,
	};

	// Schema for the form validation using Yup library
	const initialSchema = Yup.object().shape({
		email: Yup.string()
			.required('Email is a required field')
			.email('Invalid email format'),
		password: Yup.string()
			.required('Password is a required field')
			.min(8, 'Password must be at least 8 characters'),
	});

	// onSubmit function is used to handle the form submission
	const onSubmitHandler = (values, { setSubmitting }) => {
		setSubmitting(true);
		login(values);
	};

	return (
		<>
			<Formik
				onSubmit={async (values, actions) => {
					onSubmitHandler(values, actions);
				}}
				validationSchema={initialSchema}
				initialValues={initialValues}
				enableReinitialize={true}
			>
				{({ isSubmitting, dirty, values, handleChange, handleBlur }) => {
					return (
						<section className="bg-gray-50">
							<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
								<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
									<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
										<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
											Sign in
										</h1>
										<Form className="space-y-4 md:space-y-6">
											<Field
												id="email"
												name="email"
												type="email"
												placeholder="Email"
												component={TextField}
												value={values.email}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											<Field
												id="password"
												name="password"
												type="password"
												placeholder="Password"
												component={TextField}
												value={values.password}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											<Field
												name="rememberMe"
												type="checkbox"
												label="Remember me..."
												checked={values.rememberMe}
												component={CheckboxField}
											/>
											<button
												type="submit"
												disabled={isSubmitting || !dirty}
												className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
											>
												Sign in
											</button>
										</Form>
									</div>
								</div>
							</div>
						</section>
					);
				}}
			</Formik>
		</>
	);
};

export default Login;
