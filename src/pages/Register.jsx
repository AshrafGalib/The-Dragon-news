import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Register</h1>
        <form  className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Set password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <p>Already have an account? <Link to='/auth/login' className='text-blue-400 font-bold underline'>Login</Link></p>
          <button className="btn btn-neutral mt-4">Register</button>
          {/* <p className='text-red-400'>{errorMessage}</p> */}
        </form>

      </div>
    </div>
    );
};

export default Register;