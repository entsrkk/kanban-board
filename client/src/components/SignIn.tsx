import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('http://localhost:3000/signin', {
        email: data.email,
        password: data.password,
      })
      navigate("/");
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <div className="max-w-md shadow w-full mx-auto my-20 border rounded-lg p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-xl">Please Login</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: "Password is required" })}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <button
            className="btn bg-red text-white w-full mt-6 mb-4"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className='text-center'>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className='text-red'>
              Signup Now
            </Link>
          </p>
          <a href='/' className='absolute right-4 top-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
