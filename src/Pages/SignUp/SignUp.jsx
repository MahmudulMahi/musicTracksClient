
import { useContext, useState } from 'react';
import { Link,  } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';



const SignUp = () => {

  const {createUser}=useContext(AuthContext)
  const [error, setError] = useState('');
  const [firebaseerror, setFirebaseError] = useState('');

  const handleSignUp=e=>{
    e.preventDefault()
    const form = e.target
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value
    setError('')
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return; // Exit the function if password is too short
    }
   
   
    console.log(name,email,password)

    createUser(email,password)
    .then(result =>{
      const user=result.user
      console.log(user)
      window.location.href = '/';
      
    })
    .catch((err)=>{
      console.log(err)
      setFirebaseError(err.message)
    })

  }



  return (
    <div className="hero min-h-screen  bg-base-200">

    
      <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h2 className='text-center text-2xl pt-10'>Sign Up Page</h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className='text-center pb-10'>New to here <Link to="/login">Log In</Link></p>
        {
           firebaseerror && <div style={{ color: 'red' }}>{firebaseerror}</div>
          }
      </div>
    </div>
  );
};

export default SignUp;