
import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Login = () => {
  const [errorMessage,setErrorMessage]=useState('')
  const [uiLoading,setUiLoading]=useState(false)
  const navigate =useNavigate()
  const location =useLocation()
   const{login}=use(AuthContext)
   
    useEffect(() => {
    if (!uiLoading) return

    const timer = setTimeout(() => {
      setUiLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [uiLoading])

   const handleLogin =async(e)=>{
         e.preventDefault()
         const email =e.target.email.value
         const password =e.target.password.value
 //console.log(email,password)
   setErrorMessage('')
   setUiLoading(true)
   try{
    await login(email,password)
    navigate(`${location.state?location.state: '/'}`)
   } catch(error){
    console.log(error)
    setUiLoading(false)
    setErrorMessage(error.message)
   }
    }

if(uiLoading) {
  return(
    <div className='w-full flex justify-center items-center h-screen'>
      <span className="skeleton skeleton-text">Logging in...</span>
    </div>
  )
}

    return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Login</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input"  name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a  className="link link-hover">Forgot password?</a></div>
          {errorMessage && <p className="text-red-400 text-xs">{errorMessage}</p>}
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
          
          <p>New to The Dragon News? <Link to='/auth/register' className='text-blue-400 font-bold underline'>Register</Link></p>
         
        </form>

      </div>
    </div>
  

    );
};

export default Login;