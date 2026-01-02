import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Services/Firebase/firebase.config';
export const AuthContext =createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)


    console.log("User :",user)
    //createUser
    const createUser =(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //user Logout
    const logout =()=>{
     return signOut(auth)
    }

    //sign in
    const login =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Update Profile
    const setProfile =(userProfile)=>{
 return updateProfile(auth.currentUser,userProfile)
    }



    useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)
 })
return ()=>unsubscribe()
    },[])

    const userInfo ={
        user,
        setUser,
        createUser,
        logout,
        login,
        loading,
        setProfile
    }
    return <AuthContext value={userInfo}>
           {children}
           </AuthContext>
};

export default AuthProvider;