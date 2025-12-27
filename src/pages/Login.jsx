import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Login</h1>
        <form  className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          {/* <p className='text-red-400'>{errorMessage}</p> */}
          <p>New to Dragon news? <Link to='/auth/register' className='text-blue-400 font-bold underline'>Register</Link></p>
          
        
        </form>
      </div>
    </div>
    );
};

export default Login;