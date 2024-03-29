import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

  const {signIn}=useContext(AuthContext)
  const [error, setError] = useState('');
 

  const handleLogin=e=>{
    e.preventDefault()
    const form = e.target
   
    const email=form.email.value;
    const password=form.password.value

    setError("")

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return; // Exit the function if password is too short
    }

    console.log(email,password)

    signIn(email,password)
    .then(result =>{
      const user=result.user
      console.log(user)
      window.location.href = '/';
    })
    .catch(error => {
      console.log(error)
    
    })
  }
  return (
    <div className="hero min-h-screen  bg-base-200">
      
       
        <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className='text-center text-2xl mt-10'>Log In Page</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className='text-center pb-10'>New to here <Link to="/signup">Sign Up</Link></p>

         
        </div>
      </div>

  );
};

export default Login;