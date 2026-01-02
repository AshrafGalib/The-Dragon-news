import React, { use, useEffect, useState } from 'react';

//import { auth } from '/React practice/doc-talk/src/Services/Firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Reg = () => {
  const [errorMessage,setErrorMessage]=useState('')
  const [uiLoading,setUiLoading]=useState(false)
  const navigate = useNavigate()
  const{createUser,setUser,setProfile}=use(AuthContext)
useEffect(()=>{
 if(!uiLoading)return
 const timer = setTimeout(() => {
      setUiLoading(false)
    }, 10000)

    return () => clearTimeout(timer)

},[uiLoading])
   const handleRegister =async(e)=>{
         e.preventDefault()
         const name =e.target.name.value
         const email =e.target.email.value
         const password =e.target.password.value
     console.log(name,email,password)
    setUiLoading(true)
     try{
     const result =await  createUser(email,password)
    await setProfile({
      displayName : name
    })
     setUser(result.user)
    navigate('/')
     }catch(error){
      setUiLoading(false)
      setErrorMessage(error.message)
     }
    }
    if(uiLoading){
       return(
    <div className='w-full flex justify-center items-center h-screen'>
      <span className="skeleton skeleton-text">Creating account...</span>
    </div>
  )
    }

    return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
       <div className="card-body">
          <h1 className='font-bold text-4xl text-center'>Register</h1>
        <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' required />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" required/>
          <label className="label">Set password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <p>Already have an account? <Link to='/auth/login' className='text-blue-400 font-bold underline'>Login</Link></p>
          {errorMessage && <p className="text-red-400 text-xs">{errorMessage}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
         
        </form>

      </div>
    </div>
    );
};

export default Reg;