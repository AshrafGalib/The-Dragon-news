import React, { use, useState } from 'react';
import { AuthContext } from '../Context/Context';
import { sendEmailVerification} from "firebase/auth";
//import { auth } from '/React practice/doc-talk/src/Services/Firebase/firebase.config';
import { Link } from 'react-router';

const Reg = () => {
const{createUser,signOutUser,userUpdateProfile}=use(AuthContext)
const[errorMessage,setErrorMessage]=useState('')

   const handleRegister =async(e)=>{
         e.preventDefault()
         const name =e.target.name.value
         const email =e.target.email.value
         const password =e.target.password.value
        // console.log(name,email,password)

         setErrorMessage('')

         try{
            //1.create user
            const result = await createUser(email, password);
            //2.send verification email
            await sendEmailVerification(result.user);
            //3.update profile
            await userUpdateProfile({displayName: name});
            //4.logout user
            await signOutUser();
            alert('Check your email or spam folder! Verify your account before logging in.');
         }
         catch(error){
            const match = error.message.match(/\(([^)]+)\)/)
            setErrorMessage(match[1])
         }
    }

    return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Register</h1>
        <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Set password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <p>Already have an account? <Link to='/auth/login' className='text-blue-400 font-bold underline'>Login</Link></p>
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-red-400'>{errorMessage}</p>
        </form>

      </div>
    </div>
    );
};

export default Reg;