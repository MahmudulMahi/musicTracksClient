import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="hero min-h-screen  bg-base-200">

    
      <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h2 className='text-center text-2xl pt-10'>Sign Up Page</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className='text-center pb-10'>New to here <Link to="/login">Log In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;