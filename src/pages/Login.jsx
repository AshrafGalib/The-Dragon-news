import { use, useRef, useState } from 'react';
import { AuthContext } from '../Context/Context';
import { Link, useLocation, useNavigate } from 'react-router';
const Login = () => {
   const emailRef =useRef()
    const navigate=useNavigate()
    const location=useLocation()
    //console.log(location)
   const redirectPath = location.state?.from || '/';
   const[errorMessage,setErrorMessage]=useState('')

    const {SignInUser,signOutUser,passReset}=use(AuthContext) 
   
   const handleLogin =async(e)=>{
         e.preventDefault()
         const email =e.target.email.value
         const password =e.target.password.value
   setErrorMessage('')

   try{
    //1. login user
   const result =await SignInUser(email,password)
   //2.reload result.user for getting firebase user's email verification update
   await result.user.reload()
   //check user's email verification
    if(!result.user.emailVerified){
               signOutUser()
               alert('Please verify your email first.')
               return
            }
            //if user's email verification is OKAY
            navigate(redirectPath, { replace: true })
   }catch(error){
 const match = error.message.match(/\(([^)]+)\)/)
            setErrorMessage(match[1])
   }
    }

const handleForgetPassword =()=>{
   const email = emailRef.current.value
   passReset(email)
   .then(()=>{
      alert('A password reset link has been sent to your email. Check your inbox or spam folder.')
   })
   .catch((error)=>{
      const match = error.message.match(/\(([^)]+)\)/)
            setErrorMessage(match[1])
   })
}

    return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Login</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" ref={emailRef} name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-red-400'>{errorMessage}</p>
          <p>New to The Dragon News? <Link to='/auth/register' className='text-blue-400 font-bold underline'>Register</Link></p>
         
        </form>

      </div>
    </div>
  

    );
};

export default Login;