import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import app from '../Services/Firebase/firebase.config';
 import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext =createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const provider = new GoogleAuthProvider();
const [user,setUser]=useState(null)
const[loading,setLoading]=useState(true)


    // console.log("User :",user)
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

    //Forget pass
    const resetPassViaEmail =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    //signInWithGoogle

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, provider)
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
        setProfile,
        resetPassViaEmail,
        signInWithGoogle
    }
    return <AuthContext value={userInfo}>
           {children}
           </AuthContext>
};

export default AuthProvider;