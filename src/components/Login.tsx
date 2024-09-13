import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../axios';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  // Formik setup with Yup validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await api.post('/users/login', values);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard', { replace: true });
      } catch (error) {
        setErrors({ password: 'Invalid email or password' });
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen">
          {/* Image Section with Clock */}
      <div className="relative hidden lg:flex lg:w-1/2 h-full justify-center items-center">
        <img
           src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="background"
          className="absolute object-cover h-full w-full"
        />
        <div className="relative z-10 text-white text-4xl font-bold text-center">
        <h1 className="logo">Study Hard</h1>
            <h2>Time is Ticking</h2>
          {time}
        </div>
      </div>
      {/* Form Section */}
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full px-6 lg:px-20">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold border-b-4 border-purple-500 w-[80px] mb-[5px]">Login</h2>
          <p className='mb-6 font-semibold text-gray'>Welcome Back! Login to Start your Day!</p>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring focus:ring-blue-200 outline-none`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring focus:ring-blue-200 outline-none`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

    
    </div>
  );
};

export default Login;
